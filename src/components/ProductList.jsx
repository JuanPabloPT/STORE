import { useEffect, useState } from 'react';
import { ProductService } from '../services/ProductService';
import { useNavigate } from 'react-router-dom';

export function ProductList() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const productService = new ProductService();
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchProducts() {
            const products = await productService.getProducts();
            setProducts(products);
            setLoading(false);
        }

        fetchProducts();
    }, []);

    if (loading) {
        return (
        <div className="flex items-center justify-center bg-gradient-to-r from-blue-800 to-black min-h-screen p-8 align">
            <h1 className="text-6xl font-bold text-white text-center mb-8">Cargando...</h1>
        </div>
        );
    }

    const handleViewProduct = (id) => {
        navigate(`/product/${id}`);
    }
    
    return (
        <div className="bg-gradient-to-r from-blue-800 to-black  min-h-screen p-8">
            <div className="container mx-auto">
                <br></br>
                <h1 className="text-6xl font-bold text-white text-center mb-8">Catalogo de Productos</h1>
                <br></br>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {products.map(product => (
                        <div key={product.id} className="flex bg-white rounded-lg shadow-lg overflow-hidden">
                            <img className="w-1/4 h-58 object-cover m-9" src={product.image} alt={product.title} />
                            <div className="flex flex-col justify-between p-4 w-2/3">
                                <div>
                                    <h3 className="text-4xl mt-4 font-semibold mb-2">{product.title}</h3>
                                    <p className="text-2xl mt-3 text-gray-700 ">${product.price}</p>
                                </div>
                                <button
                                    className="text-2xl bg-blue-500 text-white py-5 ml-7 mr-7 mb-7 rounded hover:bg-blue-600"
                                    onClick={() => handleViewProduct(product.id)}
                                >
                                    Ver Detalles
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}