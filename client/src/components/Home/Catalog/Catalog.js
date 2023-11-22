import { CatalogItem } from "./components/CatalogItem";

export const Catalog = ({
    products,
}) => {
    return (
        <section id="catalog-page">
            <div className="container">
                <h1>All Products</h1>

                {products && Array.isArray(products) && products.length > 0? (
                products.map((x) => <CatalogItem key={x._id} {...x} />)) 
                : 
                (<h3 className="no-articles">No products yet</h3>)}
            </div>
        </section>
    );
};