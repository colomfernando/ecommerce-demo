/* eslint-disable no-undef */
import React from 'react';
import Styles from './styles';

const mock = {
  id: '123',
  name: 'Nike Air Jordan M1',
  images: ['123.png'],
  category: ['1', '3', '5'],
  brand: 'Nike',
  skuId: '123',
  skus: [
    {
      skuId: '234',
      listPrice: 50.3233,
      bestPrice: 45.24,
      image: 'url image',
    },
  ],
};

const ProductCard = ({ ...props }) => {
  return (
    <Styles.Wrapper {...props}>
      <Styles.Image
        src={`${process.env.PUBLIC_URL}/assets/products/${mock.images[0]}`}
      />
      <Styles.WrapperInfo>
        <Styles.Brand>{mock.brand}</Styles.Brand>
        <Styles.Name>{mock.name}</Styles.Name>
        <Styles.Price
          listPrice={mock.skus[0].listPrice}
          bestPrice={mock.skus[0].bestPrice}
        />
        <Styles.BuyButton>Buy</Styles.BuyButton>
      </Styles.WrapperInfo>
    </Styles.Wrapper>
  );
};

export default ProductCard;
