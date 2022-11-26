import { number } from 'prop-types';
import React from 'react';
import Styles from './styles';
import formatPrice from 'utils/formatPrice';

const Prices = ({ bestPrice, listPrice, ...props }) => {
  if (!listPrice) return null;

  const hasBestPrice = !!bestPrice && bestPrice < listPrice;
  return (
    <Styles.Wrapper {...props}>
      {hasBestPrice && (
        <Styles.BestPrice>{formatPrice.format(bestPrice)}</Styles.BestPrice>
      )}
      <Styles.ListPrice hasBestPrice={hasBestPrice}>
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
