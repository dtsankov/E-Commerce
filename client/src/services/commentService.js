

import { requestFactory } from './requester';

import { environment } from '../environment/environment';

const baseUrl = `${environment.apiUrl}/products/catalog`

const request = requestFactory();

export const getAll = async (productId) => {
    

};

export const create = async (comment, productId,) => {
    const result = await request.put(`${baseUrl}/add-comment/${productId}`, comment );

    return result;
};