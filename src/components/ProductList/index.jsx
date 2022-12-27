import { arrayOf, shape, string, number } from 'prop-types';
import React from 'react';
import Styles from './styles';
import Filters from 'components/Filters';
import { useSelector } from 'react-redux';

const ProductList = ({ ...props }) => {
  const searchState = useSelector((state) => state.search);
  const { results, filters } = searchState;
  const hasProducts = Boolean(results && results.length);

  return (
    <Styles.Wrapper {...props}>
      {hasProducts ? (
        <>
          <Styles.Aside>
            <Filters filters={filters} />
          </Styles.Aside>
          <Styles.List>
            {results.map((product) => (
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
