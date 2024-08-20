import {HttpContext} from '../shared/client/HttpContext.jsx'

export class ProductService{
    constructor(){
        this.httpContext = new HttpContext()
    }

    async getProducts(){
        return await this.httpContext.get('/products')
    }

    async getProduct(id){
        return await this.httpContext.get(`/products/${id}`)
    }

}