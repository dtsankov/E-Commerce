/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { createContext } from "react";

import { productServiceFactory } from '../services/productService';
import { getSession } from '../session/session';
import { AuthContext } from './AuthContext';

export const ProductContext = createContext()

export const ProductProvider = ({children}) =>{

    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const productService = productServiceFactory(getSession()?.acceessToken); //auth.accessToken
    const {userId} = useContext(AuthContext) 

  /*   useEffect(() => {
      productService.getAll()
            .then(result => {
              setProducts(result)
            })
    }, []); */
  
    const onCreateProductSubmit = async (data, userId) => {
        
        const newProduct = await productService.create(data, userId);
        console.log(newProduct);
  
        setProducts(state => [...state, newProduct]);
  
        navigate('/catalog');
    };
  
    const onProductEditSubmit = async (values) => {
        const result = await productService.edit(values._id, values);
  
        setProducts(state => state.map(x => x._id === values._id ? result : x))
  
        navigate(`/catalog/${values._id}`);
    }




const productContextValue = { 
    onCreateProductSubmit,
    onProductEditSubmit,
    products,
    setProducts,

}
    return(
        <ProductContext.Provider value={productContextValue}>
            {children}
        </ProductContext.Provider>
    )
}



