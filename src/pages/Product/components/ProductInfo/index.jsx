import { number, string } from 'prop-types';
import React from 'react';
import Styles from './styles';
import useCart from 'hooks/useCart';

const ProductInfo = ({
  skuId,
  brand,
  name,
  bestPrice,
  listPrice,
  description,
  ...props
}) => {
  if (!skuId) return null;
  const { qty, isItemInOrder, addItem, updateItem } = useCart(skuId);

  const item = {
    skuId,
    brand,
    name,
    listPrice,
    bestPrice,
    ...props,
  };

  return (
    <Styles.Wrapper>
      <Styles.Brand>{brand}</Styles.Brand>
      <Styles.Name name={name} />
      <Styles.Description>{description}</Styles.Description>
      <Styles.Price bestPrice={bestPrice} listPrice={listPrice} />
      {isItemInOrder && (
        <Styles.Qty
          qty={qty}
          minusFn={(newQty) => updateItem(skuId, newQty)}
          plusFn={(newQty) => addItem(item, newQty)}
        />
      )}
      <Styles.BuyButton
        isItemInOrder={isItemInOrder}
        onClick={() => addItem(item)}
      >
        ADD
      </Styles.BuyButton>
    </Styles.Wrapper>
  );
};

ProductInfo.propTypes = {
  skuId: string.isRequired,
  description: string,
  brand: string.isRequired,
  name: string.isRequired,
  listPrice: number.isRequired,
  bestPrice: number,
};

ProductInfo.defaultProps = {
  bestPrice: null,
  description: null,
};
export default ProductInfo;
