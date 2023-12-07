import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const CatalogItem = ({
    _id,
    title,
    imageUrl,
    category,
    price
}) => {
    return (
    <Card style={{ width: '25em' }}>
        <Card.Img variant="top" src={imageUrl} />
        <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
            {category}
            </Card.Text>
            <Card.Text>
            {price}.00 EUR
            </Card.Text>
            <div className="button-wrapper">
                <Button variant="primary" className="button details-button"><Link to={`/catalog/${_id}`}>Details</Link></Button>
                <Button variant="primary" className="button basket-button"> <Link to={`#`} >Add to Basket</Link></Button>
            </div>
        </Card.Body>
    </Card>
    );
}




   
    
