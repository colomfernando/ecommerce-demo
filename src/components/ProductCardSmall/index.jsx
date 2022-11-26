import { arrayOf, shape, string } from 'prop-types';
import React from 'react';
import Styles from './styles';
import ellipsisText from 'utils/ellipsisText';
import useCart from 'hooks/useCart';

const ProductCardSmall = ({ name, brand, skuId, images, ...props }) => {
  if (!name || !skuId) return null;
  const { qty, updateItem } = useCart(skuId);

  const imageToShow = images[0] || null;

  return (
    <Styles.Wrapper {...props}>
      <Styles.Image
        size="small"
        src={`${process.env.PUBLIC_URL}/assets/products/${imageToShow.url}`}
        alt={imageToShow.alt}
      />
      <Styles.WrapperInfo>
        <Styles.Brand>{brand}</Styles.Brand>
        <Styles.Name>{ellipsisText(name, 20)}</Styles.Name>
        <Styles.Prices listPrice={34} bestPrice={30} />
      </Styles.WrapperInfo>
      <Styles.Qty
        qty={qty}
        minusFn={(newQty) => updateItem(skuId, newQty)}
        plusFn={(newQty) => updateItem(skuId, newQty)}
        type="vertical"
      />
    </Styles.Wrapper>
  );
};

ProductCardSmall.propTypes = {
  name: string.isRequired,
  skuId: string.isRequired,
  brand: string,
  images: arrayOf(
    shape({
      url: string,
      alt: string,
    })
  ).isRequired,
};

ProductCardSmall.defaultProps = {
  brand: null,
};

export default ProductCardSmall;
