import { arrayOf, shape, string, number } from 'prop-types';
import React from 'react';
import Styles from './styles';

const ProductList = ({ products, ...props }) => {
  const hasProducts = Boolean(products && products.length);

  return (
    <Styles.Wrapper {...props}>
      {hasProducts ? (
        <>
          <Styles.Filters>Filtros</Styles.Filters>
          <Styles.List>
            {products.map((product) => (
              <Styles.Product key={product.id} {...product} />
            ))}
          </Styles.List>
        </>
      ) : (
        <Styles.EmptyResult text="No products available" />
      )}
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
