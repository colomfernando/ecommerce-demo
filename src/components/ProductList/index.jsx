import { arrayOf, shape, string, number } from 'prop-types';
import React from 'react';
import Styles from './styles';

const ProductList = ({ products, ...props }) => {
  if (!products || !products.length) return null;

  return (
    <Styles.Wrapper {...props}>
      <Styles.Filters>Filtros</Styles.Filters>
      <Styles.List>
        {products.map((product) => (
          <Styles.Product key={product.id} {...product} />
        ))}
      </Styles.List>
    </Styles.Wrapper>
  );
};

ProductList.propTypes = {
  products: arrayOf(
    shape({
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
    })
  ),
};

ProductList.defaultProps = {
  products: [],
};

export default ProductList;
