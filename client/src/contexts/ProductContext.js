/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createContext } from "react";
import { toast } from "react-toastify";




import { productServiceFactory } from '../services/productService';
import { getSession } from '../session/session';

export const ProductContext = createContext()

export const ProductProvider = ({children}) =>{

     

    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const productService = productServiceFactory(getSession()?.accessToken); //auth.accessToken


  
    const onCreateProductSubmit = async (data) => {

        const { userId, ...productData } = data;
        
        const newProduct = await productService.create(productData, userId);
  
        setProducts(state => [...state, newProduct]);

        toast.success('Product created successfully');
  
        navigate('/');
    };
  
    const onProductEditSubmit = async (values) => {
        const result = await productService.edit(values._id, values);
  
        setProducts(state => state.map(x => x._id === values._id ? result : x))

        toast.success('Product created successfully');

  
        navigate(`/catalog/${values._id}`);
    }

    const onSetProducts = (value) =>{
        setProducts(value)
    }




const productContextValue = { 
    onCreateProductSubmit,
    onProductEditSubmit,
    products,
    onSetProducts,

}
    return(
        <ProductContext.Provider value={productContextValue}>
            {children}
        </ProductContext.Provider>
    )
}



