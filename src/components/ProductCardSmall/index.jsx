import { arrayOf, shape, string } from 'prop-types';
import React from 'react';
import getImagesProduct from 'utils/getImagesProduct';
import Styles from './styles';
import ellipsisText from 'utils/ellipsisText';

const ProductCardSmall = ({ name, brand, skuId, skus }) => {
  if (!name || !skuId) return null;

  const images = getImagesProduct({ skuId, skus });

  return (
    <Styles.Wrapper>
      <Styles.Image
        size="small"
        src={`${process.env.PUBLIC_URL}/assets/products/${images[0]}`}
      />
      <Styles.WrapperInfo>
        <Styles.Brand>{brand}</Styles.Brand>
        <Styles.Name>{ellipsisText(name, 20)}</Styles.Name>
        <Styles.Prices listPrice={34} bestPrice={30} />
      </Styles.WrapperInfo>
    </Styles.Wrapper>
  );
};

ProductCardSmall.propTypes = {
  name: string.isRequired,
  skuId: string.isRequired,
  brand: string,
  skus: arrayOf(
    shape({
      images: arrayOf(string),
    })
  ).isRequired,
};

ProductCardSmall.defaultProps = {
  brand: null,
};

export default ProductCardSmall;
