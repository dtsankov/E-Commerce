import { useEffect,useContext } from "react";


import { productServiceFactory } from '../../services/productService';
import { getSession } from '../../session/session';
import { Catalog } from "./Catalog/Catalog";
import { ProductContext } from "../../contexts/ProductContext";
import { HeroBanner } from "./HeroBanner/HeroBanner";



 const Home = () => {
     const {products,onSetProducts} = useContext(ProductContext);
     
     useEffect(() => {
         productService.getAll()
         .then(result => {
            onSetProducts(state => [...result])
            })
        }, []);
        
    const productService = productServiceFactory(getSession()?.accessToken); //auth.accessToken


    

    return(
        <>
        <HeroBanner/>
        <Catalog products={products}/>
        </>
    )
}

export default Home;