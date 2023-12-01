import React, { useEffect, useState } from 'react';
 
import { useService } from "../../../hooks/useService";
import { productServiceFactory } from "../../../services/productService"


import Carousel from 'react-bootstrap/Carousel';
import { ImageCardItem } from './ImageCardItem/ImageCardItem';

export const HeroBanner = () => { 
    const productService = useService(productServiceFactory);
    const [latestProducts, setLatestProducts] = useState([]);

    useEffect(() => {
        // Fetch the latest 3 products or adjust as needed
        productService.getAll()
          .then((products) => {
            setLatestProducts(products.slice(0,2));
          })
          .catch((error) => {
            console.error('Error fetching latest products:', error);
          });
      }, []);

    return (
    <Carousel fade>
     {latestProducts.slice(0,2).map((product) => (
        <Carousel.Item key={product._id}>
                <ImageCardItem product={product} />
            <Carousel.Caption>
                {/* <h3>{product.title}</h3>
                <p>{product.description}</p> */}
            </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}



