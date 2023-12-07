import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";


export const ImageCardItem = ({product}) => {


    return(
    <div className="container hero-banner">
        <div className='container-wrapper'>
            <Card className="bg-dark text-white">
                <Card.Img src={product.imageUrl} alt="Card image" className="card-img" />
                <Card.ImgOverlay>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>
                    <Button variant="primary" className="button basket-button"> <Link to={`#`} >Add to Basket</Link></Button>
                    </Card.Text>
                </Card.ImgOverlay>
            </Card>
        </div>
    </div>
  );
}
 