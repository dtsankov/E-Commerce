import { setSession } from "../shared/session/session"
import * as request from "../utils/requester"
const baseUrl = 'http://localhost:3000/auth'


export const login = async (email, password) => {
    
    const body = {
        email,
        password
    }

    const result = await request.post(`${baseUrl}/login`, body)
    console.log(result);
    setSession(result)

    return result
    
}

export const register = async (email, password) => {
    
    const body = {
        email,
        password
    }
    const result = await request.post(`${baseUrl}/register`, body)
    
    return result
}

export const logout = async () => {

    const result = await request.post(`${baseUrl}/logout`)

    return result

}