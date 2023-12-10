import { Catalog } from "../Home/Catalog/Catalog"

 const ElectricalScrewdriver = ({
    products
 }) => {

const currentProducts = products.filter(p=> p.category.toLowerCase() === 'electrical screwdrivers')
const pageTitle = 'Electrical Screwdrivers'
    return(
        <Catalog products={currentProducts} pageTitle={pageTitle}/>
    )
}

export default ElectricalScrewdriver
