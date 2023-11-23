import { useEffect,useContext } from "react";


import { productServiceFactory } from '../../services/productService';
import { getSession } from '../../session/session';
import { Catalog } from "./Catalog/Catalog";
import { ProductContext } from "../../contexts/ProductContext";



 const Home = ({
    products
 }) => {
     
     useEffect(() => {
         productService.getAll()
         .then(result => {
             setProducts(result)
            })
        }, []);
        
    const {setProducts} = useContext(ProductContext);
    const productService = productServiceFactory(getSession()?.accessToken); //auth.accessToken


    return(
        <Catalog products={products}/>
    )
}

export default Home;