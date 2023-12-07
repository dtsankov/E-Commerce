import { Catalog } from "../Home/Catalog/Catalog"

 const Grinders = ({
    products
 }) => {

const currentProducts = products.filter(p=> p.category.toLowerCase() === 'grinders')
const pageTitle = 'Grinders'
    return(
        <Catalog products={currentProducts} pageTitle={pageTitle}/>
    )
}

export default Grinders
