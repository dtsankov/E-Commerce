import { Catalog } from "../Home/Catalog/Catalog"

 const JigSaws = ({
    products
 }) => {

const currentProducts = products.filter(p=> p.category.toLowerCase() === 'jig aws')
const pageTitle = 'Jig Saws'
    return(
        <Catalog products={currentProducts} pageTitle={pageTitle}/>
    )
}

export default JigSaws
