export class HttpContext{
    constructor(){
     this.basePath = "https://fakestoreapi.com";
    }

    async get(url){
        
        const response = await fetch(`${this.basePath}${url}`);

        if(!response.ok){
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    }

}