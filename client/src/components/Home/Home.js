import { useEffect,useContext } from "react";


import { productServiceFactory } from '../../services/productService';
import { getSession } from '../../session/session';
import { Catalog } from "./Catalog/Catalog";
import { ProductContext } from "../../contexts/ProductContext";



 const Home = ({
    
 }) => {
     const {products,onSetProducts} = useContext(ProductContext);
     
     useEffect(() => {
         productService.getAll()
         .then(result => {
            onSetProducts(state => [...result])
            })
        }, []);
        
    const productService = productServiceFactory(getSession()?.accessToken); //auth.accessToken


    

    return(
        <Catalog products={products}/>
    )
}

export default Home;