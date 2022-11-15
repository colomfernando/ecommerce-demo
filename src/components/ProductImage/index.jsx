import { bool, oneOf, string } from 'prop-types';
import React from 'react';
import Styles from './styles';

const ProductImage = ({ src, size = 'medium', square = true, ...props }) => {
  if (!src) return null;
  return (
    <Styles.Wrapper size={size} {...props}>
      <Styles.Image square={square} src={String(src)} />
    </Styles.Wrapper>
  );
};

ProductImage.propTypes = {
  src: string.isRequired,
  square: bool,
  size: oneOf(['small', 'medium', 'large']),
};

ProductImage.defaultProps = {
  square: true,
  size: 'medium',
};

export default ProductImage;
