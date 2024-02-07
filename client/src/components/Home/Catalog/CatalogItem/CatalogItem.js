import React from "react";
import { Link } from "react-router-dom";
import { useShoppingCart } from "../../../../contexts/ShoppingCartContext";
import { formatCurrency } from "../../../../utilities/formatCurrency"
 

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export const CatalogItem = ({ _id, title, imageUrl, category, price }) => {
    const {
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
      } = useShoppingCart()

      const quantity = getItemQuantity(_id)



     

    

    return (
        <Card style={{ width: "25em"}} >
            <Card.Img variant="top" src={imageUrl} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{category}</Card.Text>
                <Card.Text>{formatCurrency(price)}</Card.Text>
                <div className="button-wrapper">
                    <Button variant="primary" className="button details-button">
                        <Link to={`/catalog/${_id}`}>Details</Link>
                    </Button>
                    {quantity === 0 ? (
                    <Button className="w-90 cart-button" onClick={() => increaseCartQuantity(_id)}>
                    + Add To Cart
                    </Button>) 
                    : (<div
                    className="d-flex align-items-center flex-column"
                    style={{ gap: ".5rem" }}
                    >
                    <div
                        className="d-flex align-items-center justify-content-center"
                        style={{ gap: ".5rem" }}
                    >
                        <Button onClick={() => decreaseCartQuantity(_id)}>-</Button>
                        <div>
                        <span className="fs-3">{quantity}</span> in cart
                        </div>
                        <Button onClick={() => increaseCartQuantity(_id)}>+</Button>
                    </div>
                    <Button
                        onClick={() => removeFromCart(_id)}
                        variant="danger"
                        size="sm"
                    >
                        Remove
                    </Button>
            </div>
          )}
                </div>
            </Card.Body>
        </Card>
    );
};
