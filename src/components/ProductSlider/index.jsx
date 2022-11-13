import React from 'react';
import Swiper from 'components/Swiper';
import Styles from './styles';
import { arrayOf, oneOfType, node, string } from 'prop-types';

const ProductSlider = ({ title, children, ...props }) => {
  return (
    <Styles.Wrapper>
      {title && <Styles.Title>{title}</Styles.Title>}
      <Swiper
        type="productSlider"
        slidesPerView={1}
        pagination={{ clickable: true }}
        breakpoints={{
          600: {
            slidesPerView: 2,
          },
          960: {
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 4,
          },
          1600: {
            slidesPerView: 5,
          },
        }}
        {...props}
      >
        {children}
      </Swiper>
    </Styles.Wrapper>
  );
};

ProductSlider.propTypes = {
  title: string,
  children: oneOfType([node, arrayOf(node)]).isRequired,
};
ProductSlider.defaultProps = {
  title: null,
};

export default ProductSlider;
