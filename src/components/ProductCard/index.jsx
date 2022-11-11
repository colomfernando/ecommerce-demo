/* eslint-disable no-undef */
import React from 'react';
import Styles from './styles';

const ProductCard = () => {
  return (
    <Styles.Wrapper>
      <img src={`${process.env.PUBLIC_URL}/assets/products/ACS_1595.webp`} />
    </Styles.Wrapper>
  );
};

export default ProductCard;
