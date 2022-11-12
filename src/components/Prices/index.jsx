import { number } from 'prop-types';
import React from 'react';
import Styles from './styles';

const Prices = ({ bestPrice, listPrice, ...props }) => {
  if (!listPrice) return null;
  const options = { style: 'currency', currency: 'USD' };
  const formatPrice = new Intl.NumberFormat('en-US', options);
  return (
    <Styles.Wrapper {...props}>
      {bestPrice && (
        <Styles.BestPrice>{formatPrice.format(bestPrice)}</Styles.BestPrice>
      )}
      <Styles.ListPrice hasBestPrice={!!bestPrice}>
        {formatPrice.format(listPrice)}
      </Styles.ListPrice>
    </Styles.Wrapper>
  );
};

Prices.propTypes = {
  bestPrice: number,
  listPrice: number.isRequired,
};

Prices.defaultProps = {
  bestPrice: null,
};
export default Prices;
