
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay  } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

 
import { useService } from "../../../hooks/useService";
import { productServiceFactory } from "../../../services/productService"



import { ImageCardItem } from './ImageCardItem/ImageCardItem';

export const LatestProducts = () => { 
    const productService = useService(productServiceFactory);
    const [latestProducts, setLatestProducts] = useState([]);

    useEffect(() => {
        productService.getLatest()
          .then((products) => {
            setLatestProducts(products);
          })
          .catch((error) => {
            console.error('Error fetching latest products:', error);
          });
      }, []);


    return (
      <div className="container hero-banner">

      <Swiper
      slidesPerView={3}
      spaceBetween={10}
      pagination={{
          clickable: true,
      }}
      modules={[Autoplay, Pagination]}
      className="mySwiper"
      autoplay={{ delay: 5000 }}
  >
      {latestProducts.map((product) => (
          <SwiperSlide key={product._id}>
              <ImageCardItem product={product} />
          </SwiperSlide>
      ))}
  </Swiper>
  </div>

  );
}



