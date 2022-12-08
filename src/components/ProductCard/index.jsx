import { arrayOf, number, shape, string } from 'prop-types';
import React from 'react';
import Styles from './styles';
import useCart from 'hooks/useCart';

// TODO: lógica rating
// "rating": {
// 	"rate": 3.9,
// 	"count": 120
// }
const ProductCard = ({
  name,
  bestPrice,
  listPrice,
  brand,
  skuId,
  images,
  ...props
}) => {
  const imageToShow = images[0] || null;
  const { qty, isItemInOrder, addItem, updateItem } = useCart(skuId);

  const item = {
    skuId,
    brand,
    name,
    listPrice,
    bestPrice,
    images,
    ...props,
  };

  return (
    <Styles.Wrapper {...props}>
      <Styles.Link to={`/product/${skuId}`}>
        <Styles.Image
          src={`${process.env.PUBLIC_URL}/assets/products/${imageToShow.url}`}
          alt={imageToShow.alt}
        />
      </Styles.Link>
      <Styles.WrapperInfo>
        <Styles.Brand>{brand}</Styles.Brand>
        <Styles.Name name={name} />
        <Styles.Price listPrice={listPrice} bestPrice={bestPrice} />
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
          Add
        </Styles.BuyButton>
      </Styles.WrapperInfo>
    </Styles.Wrapper>
  );
};

ProductCard.propTypes = {
  brand: string,
  bestPrice: number,
  skuId: string.isRequired,
  listPrice: number.isRequired,
  name: string.isRequired,
  images: arrayOf(
    shape({
      url: string,
      alt: string,
    })
  ),
};

ProductCard.defaultProps = {
  brand: '',
  bestPrice: null,
  images: [],
};
export default ProductCard;
