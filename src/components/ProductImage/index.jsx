import { bool, oneOf, string } from 'prop-types';
import React, { useState } from 'react';
import Styles from './styles';

const ProductImage = ({
  src,
  size = 'medium',
  square = true,
  alt,
  ...props
}) => {
  const [hasError, setHasError] = useState(false);
  if (!src) return null;

  const handleOnError = () => {
    setHasError(true);
  };

  const url = !hasError
    ? src
    : `${process.env.PUBLIC_URL}/assets/image_not_available.png`;
  return (
    <Styles.Wrapper size={size} {...props}>
      <Styles.Image
        onError={handleOnError}
        square={square}
        src={String(url)}
        alt={alt}
      />
    </Styles.Wrapper>
  );
};

ProductImage.propTypes = {
  src: string.isRequired,
  square: bool,
  alt: string,
  size: oneOf(['small', 'medium', 'large']),
};

ProductImage.defaultProps = {
  square: true,
  size: 'medium',
  alt: 'product-image',
};

export default ProductImage;
