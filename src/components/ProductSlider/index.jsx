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
        slidesPerView={5}
        pagination={{ clickable: true }}
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
