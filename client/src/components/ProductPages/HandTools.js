import { Catalog } from "../Home/Catalog/Catalog"

 const HandTools = ({
    products
 }) => {

const currentProducts = products.filter(p=> p.category.toLowerCase() === 'hand tools')
const pageTitle = 'Hand tools'
    return(
        <Catalog products={currentProducts} pageTitle={pageTitle}/>
    )
}

export default HandTools

