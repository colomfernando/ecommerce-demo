import React from 'react';
import Styles from './styles';
import { arrayOf, oneOfType, node } from 'prop-types';

const ProductBrand = ({ children, ...props }) => {
  if (!children) return null;
  return <Styles.Brand {...props}>{children}</Styles.Brand>;
};

ProductBrand.propTypes = {
  children: oneOfType([arrayOf(node), node]).isRequired,
};

export default ProductBrand;
