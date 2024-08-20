import { useEffect, useState } from 'react';
import { ProductService } from '../services/ProductService';
import { useParams} from 'react-router-dom';

export function ProductDetail() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const productService = new ProductService();

    useEffect(() => {
        async function fetchProduct() {
            const productData = await productService.getProduct(id);
            setProduct(productData);
            setLoading(false);
        }

        fetchProduct();
    }, [id, productService]);

    if (loading) {
        return (
        <div className="flex items-center justify-center bg-gradient-to-r from-blue-800 to-black min-h-screen p-8 align">
            <h1 className="text-6xl font-bold text-white text-center mb-8">Cargando...</h1>
        </div>
        );
    }

    return (
        <div className="flex items-center justify-center  bg-gradient-to-r from-blue-800 to-black min-h-screen p-8">
            <div className="container mx-auto">

            <div className="flex bg-white rounded-lg shadow-lg overflow-hidden">
                <img className="m-10 w-1/3 h-94 object-cover" src={product.image} alt={product.title} />
                <div className="p-4">
                    <h2 className="m-10 text-6xl font-bold">{product.title}</h2>
                    <p className="m-10 text-2xl text-gray-700">{product.description}</p>
                    <p className="m-10 text-4xl text-lg text-gray-700 my-2">${product.price}</p>
                    <button className="text-2xl bg-green-500 text-white py-5 px-20 m-10 rounded hover:bg-green-600">
                        Comprar
                    </button>
                </div>
            </div>

            </div>
           
        </div>
    );
}
