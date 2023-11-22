import { requestFactory } from './requester';

import { environment } from '../environment/environment';

const baseUrl = `${environment.apiUrl}/product/catalog`

const request = requestFactory();

export const getAll = async (gameId) => {
    const searchQuery = encodeURIComponent(`gameId="${gameId}"`);
    const relationQuery = encodeURIComponent(`author=_ownerId:users`);

    const result = await request.get(`${baseUrl}?where=${searchQuery}&load=${relationQuery}`);
    const comments = Object.values(result);

    return comments;
};

export const create = async (gameId, comment) => {
    const result = await request.post(baseUrl, { gameId, comment });

    return result;
};