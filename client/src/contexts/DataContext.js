
import React, { useEffect, useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext';
import { productServiceFactory } from '../services/productService';
import { getSession } from '../session/session';

const DataProvider = ({ children }) => {
    const { onSetProducts } = useContext(ProductContext);
  
    useEffect(() => {
      const productService = productServiceFactory(getSession()?.accessToken);
  
      productService.getAll()
        .then(result => {
          onSetProducts(result);
        })
        .catch(error => {
          console.error('Error fetching products:', error);
        });
    }, []);
  
    return <>{children}</>;
  };
  
  export default DataProvider;