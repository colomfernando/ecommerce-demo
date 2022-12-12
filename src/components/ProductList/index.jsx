import { arrayOf, shape, string, number } from 'prop-types';
import React from 'react';
import Styles from './styles';
import Filters from 'components/Filters';

const ProductList = ({ filters, products, ...props }) => {
  const hasProducts = Boolean(products && products.length);

  return (
    <Styles.Wrapper {...props}>
      {hasProducts ? (
        <>
          <Styles.Aside>
            <Filters filters={filters} />
          </Styles.Aside>
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
  filters: shape({}),
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
  filters: {},
};

export default ProductList;
