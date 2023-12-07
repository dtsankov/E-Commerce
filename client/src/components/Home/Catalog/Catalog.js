import { CatalogItem } from "./CatalogItem/CatalogItem";

export const Catalog = ({
    products,
    pageTitle
}) => {
     
    return (
        <section className="catalog-page">
            <div className="container">
                <h1>{pageTitle}</h1>
                <div className="container-catalog-wrapper">

                    {products && Array.isArray(products) && products.length > 0? (
                    products.map((x) => <CatalogItem key={x._id} {...x} />)) 
                    : 
                    (<h3 className="no-articles">No products yet</h3>)}
                </div>
            </div>
        </section>
    );
};