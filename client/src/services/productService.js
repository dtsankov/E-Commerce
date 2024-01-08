
import { requestFactory } from './requester';
import { environment } from '../environment/environment';


const baseUrl = `${environment.apiUrl}/products/catalog`


export const productServiceFactory = (token) => {
    const request = requestFactory(token);
    
    
    const getAll = async (page) => {
        try {
            const result = await request.get(`${baseUrl}?page=${page}&pageSize=6`);
            return result;
        } catch (error) {
            throw new Error(error.message);
        }
    };


    const getLatest = async () => {
        try {
            const result = await request.get(`${baseUrl}/most-recent`);
            return result;
        } catch (error) {
            throw new Error(error.message);
        }
    };
    
    const getOne = async (productId) => {
        const result = await request.get(`${baseUrl}/${productId}`);
    
        return result;
    };
    
    const create = async (productData) => {
        
        const result = await request.post(`${baseUrl}/create`, productData);
    
        return result;
    };
    
    const edit = (productId, data) => request.put(`${baseUrl}/edit/${productId}`, data);

    const deleteProduct = (productId) => request.delete(`${baseUrl}/${productId}`);


    return {
        getAll,
        getLatest,
        getOne,
        create,
        edit,
        delete: deleteProduct,
    };
}

