
import { requestFactory } from './requester';
import { environment } from '../environment/environment';


const baseUrl = `${environment.apiUrl}/products/catalog`


export const productServiceFactory = (token) => {
    const request = requestFactory(token);
    
    
    const getAll = async () => {
        const result = await request.get(baseUrl);
        const products = Object.values(result);
    
        return products;
    };
    
    const getOne = async (productId) => {
        const result = await request.get(`${baseUrl}/${productId}`);
    
        return result;
    };
    
    const create = async (productData, userId) => {
        
        const result = await request.post(`${baseUrl}/create`, productData, userId);

        console.log(result);
    
    
        return result;
    };
    
    const edit = (productId, data) => request.put(`${baseUrl}/edit/${productId}`, data);

    const deleteProduct = (productId) => request.delete(`${baseUrl}/${productId}`);


    return {
        getAll,
        getOne,
        create,
        edit,
        delete: deleteProduct,
    };
}

