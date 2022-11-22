/* eslint-disable no-undef */
import { arrayOf, number, shape, string } from 'prop-types';
import React from 'react';
import Styles from './styles';
import useAddToCart from 'hooks/useAddToCart';

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
  const { qty } = useAddToCart(skuId);

  return (
    <Styles.Wrapper {...props}>
      <Styles.Image
        src={`${process.env.PUBLIC_URL}/assets/products/${imageToShow.url}`}
        alt={imageToShow.alt}
      />
      <Styles.WrapperInfo>
        <Styles.Brand>{brand}</Styles.Brand>
        <Styles.Name>{name}</Styles.Name>
        <Styles.Price listPrice={listPrice} bestPrice={bestPrice} />
        <Styles.Qty qty={qty} />
        <Styles.BuyButton>Buy</Styles.BuyButton>
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
