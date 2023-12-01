import Card from 'react-bootstrap/Card';

export const ImageCardItem = ({product}) => {


    return(
    <div className="container hero-banner">
        <div className='container-wrapper'>
            <Card className="bg-dark text-white">
                <Card.Img src={product.imageUrl} alt="Card image" className="card-img" />
                <Card.ImgOverlay>
                    <Card.Title>{/* {product.title} */}</Card.Title>
                    <Card.Text>
                    {/* This is a wider card with supporting text below as a natural lead-in
                    to additional content. This content is a little bit longer. */}
                    </Card.Text>
                    <Card.Text>{/* Last updated 3 mins ago */}</Card.Text>
                </Card.ImgOverlay>
            </Card>
        </div>
    </div>
  );
}
 