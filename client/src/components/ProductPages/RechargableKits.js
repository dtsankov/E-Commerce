
import { Catalog } from "../Home/Catalog/Catalog"

 const RechargableKits = ({
    products
 }) => {

const currentProducts = products.filter(p=> p.category.toLowerCase() === 'rechargable kits')
const pageTitle = 'Rechargable Kits'
    return(
        <Catalog products={currentProducts} pageTitle={pageTitle}/>
    )
}

export default RechargableKits