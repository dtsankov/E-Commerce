import { Link } from "react-router-dom";

export const CatalogItem = ({
    _id,
    title,
    imageUrl,
    category,
    price
}) => {
    return (
        <div className="all-products">
            <div className="all-products-info">
                <img src={imageUrl} alt=""/>
                <h2>{title}</h2>
                <h6>{category}</h6>
                <h4>{price}.00 EUR</h4>
                <div className="buttons-wrapper">
                <Link to={`#`} className="cart-button">Add to Basket</Link>
                <Link to={`/catalog/${_id}`} className="details-button">Details</Link>
                </div>
            </div>
        </div>
    );
}