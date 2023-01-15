import { arrayOf, shape, string, number } from 'prop-types';
import React from 'react';
import Styles from './styles';
import Filters from 'components/Filters';
import BreadCrumb from 'components/BreadCrumb';
import useWindowSize from 'hooks/useWindowSize';
import { useSelector } from 'react-redux';

const ProductList = ({ breadcrumb, ...props }) => {
  const responsive = useWindowSize();
  const searchState = useSelector((state) => state.search);
  const { results, filters } = searchState;
  const hasProducts = Boolean(results && results.length);
  // TODO filtro mobile y ordenamiento
  // TODO arreglar filtro responsive
  return (
    <Styles.Wrapper {...props}>
      {!hasProducts && <Styles.EmptyResult text="No products available" />}
      {hasProducts && (
        <>
          {breadcrumb && <BreadCrumb categories={breadcrumb} />}

          {responsive.lg && (
            <Styles.Aside>
              <Filters filters={filters} />{' '}
            </Styles.Aside>
          )}

          <Styles.List>
            {results.map((product) => (
              <Styles.Product key={product.id} {...product} />
            ))}
          </Styles.List>
        </>
      )}
    </Styles.Wrapper>
  );
};

ProductList.propTypes = {
  breadcrumb: arrayOf(
    shape({
      name: string,
      value: string,
      id: number,
      link: string,
    })
  ).isRequired,
};

ProductList.defaultProps = {
  breadcrumb: [],
};

export default ProductList;
