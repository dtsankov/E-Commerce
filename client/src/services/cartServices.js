import { requestFactory } from './requester';
import { environment } from '../environment/environment';

import {loadStripe} from "@stripe/stripe-js"


const baseUrl = `${environment.apiUrl}/create-checkout-session`

export const cartServiceFactory = (token) => {
    const request = requestFactory(token);
    
    
    
    const checkOut = async(data) =>{
        const stripe = await loadStripe(process.env.STRIPE_PUBLIC_KEY)
    try{
        const response = await request.post(`${baseUrl}`,data);

        const result = stripe.redirectToCheckOut({responseId:response.id})
        
    }catch(error){
        console.log(error.message);
    }
}



return{
    checkOut,
};
}
