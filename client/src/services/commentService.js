

import { requestFactory } from './requester';

import { environment } from '../environment/environment';

const baseUrl = `${environment.apiUrl}/products/catalog`

const request = requestFactory();

export const getAll = async (productId) => {
    

};

export const update = async (comment, productId,) => {
    try {
        const result = await request.put(`${baseUrl}/add-comment/${productId}`, comment );
        return result;
    } catch (error) {
        console.error('Error creating comment:', error);
        throw error;
    }

};