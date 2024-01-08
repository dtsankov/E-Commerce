import { requestFactory } from "./requester";
import { environment } from "../environment/environment";

const baseUrl = environment.apiUrl;

export const authServiceFactory = (token) => {
    const request = requestFactory(token);

    return {
        login: (data) => request.post(`${baseUrl}/auth/login`, data),
        register: (data) => request.post(`${baseUrl}/auth/register`, data),
        logout: () => request.get(`${baseUrl}/auth/logout`),
        getUser: (userId) => request.get(`${baseUrl}/profile/${userId}`),
        updateUser: (data) => request.post(`${baseUrl}/profile/edit`, data),
    };
};
