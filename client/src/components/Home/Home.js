import { Catalog } from "./Catalog/Catalog";
import { LatestProducts } from "./LatestProducts/LatestProducts";
import { HeroBanner } from "./HeroBanner/HeroBanner";



 const Home = ({products}) => {

    const pageTitle = 'All Products'
    return(
        <>
        <HeroBanner/>
        <Catalog products={products} pageTitle={pageTitle}/>
        <LatestProducts products={products}/>
        </>
    )
}

export default Home;