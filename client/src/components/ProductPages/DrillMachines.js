import { Catalog } from "../Home/Catalog/Catalog"

 const DrillMachines = ({
    products
 }) => {

const currentProducts = products.filter(p=> p.category.toLowerCase() === 'drill machines')
const pageTitle = 'Drill Machines'
    return(
        <Catalog products={currentProducts} pageTitle={pageTitle}/>
    )
}

export default DrillMachines