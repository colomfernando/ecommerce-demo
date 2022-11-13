import { string } from 'prop-types';
import React from 'react';
import Styles from './styles';

const ProductCardSmall = ({ name }) => {
  return <Styles.Wrapper>{name} </Styles.Wrapper>;
};

ProductCardSmall.propTypes = {
  name: string.isRequired,
};
export default ProductCardSmall;
