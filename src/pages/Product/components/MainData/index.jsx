import React, { useContext } from 'react';
import { ProductContext } from 'pages/Product';
import Swiper from 'components/Swiper';
import Styles from './styles';
import ProductInfo from '../ProductInfo';

const MainData = () => {
  const { images, ...productData } = useContext(ProductContext);
  if (!images || !images.length) return null;

  const swiperProps = {
    ...(images.length > 1 && { loop: true, navigation: true }),
  };
  return (
    <Styles.Wrapper>
      <Styles.WrapperSlider>
        <Swiper pagination={{ clickable: true }} {...swiperProps}>
          {images.map((img, idx) => (
            <Styles.Img
              size="large"
              key={idx.toString()}
              src={`${process.env.PUBLIC_URL}/assets/products/${img.url}`}
            />
          ))}
        </Swiper>
      </Styles.WrapperSlider>
      <ProductInfo {...productData} />
    </Styles.Wrapper>
  );
};

export default MainData;
