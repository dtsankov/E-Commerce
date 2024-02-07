import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import { useShoppingCart } from "../../../../contexts/ShoppingCartContext";


export const ImageCardItem = ({product}) => {


    const {
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
      } = useShoppingCart()

      const quantity = getItemQuantity(product._id)



    return(
    <div className="container hero-banner">
        <div className='container-wrapper'>
            <Card className="bg-dark text-white">
                <Card.Img src={product.imageUrl} alt="Card image" className="card-img" />
                <Card.ImgOverlay>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>
                    {quantity === 0 ? (
                    <Button className="w-90 cart-button" onClick={() => increaseCartQuantity(product._id)}>
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
                        <Button onClick={() => decreaseCartQuantity(product._id)}>-</Button>
                        <div>
                        <span className="fs-3">{quantity}</span> in cart
                        </div>
                        <Button onClick={() => increaseCartQuantity(product._id)}>+</Button>
                    </div>
                    <Button
                        onClick={() => removeFromCart(product._id)}
                        variant="danger"
                        size="sm"
                    >
                        Remove
                    </Button>
            </div>
          )}
                    </Card.Text>
                </Card.ImgOverlay>
            </Card>
        </div>
    </div>
  );
}
 