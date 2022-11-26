import React from 'react';
import OrderTotals from 'modules/OrderTotals';
import formatPrice from 'utils/formatPrice';
import Styles from './styles';

const orderTotals = new OrderTotals();

const TotalCart = ({ ...props }) => {
  const totals = orderTotals.totals;
  if (!totals || !Object.keys(totals).length) return null;

  const { items } = totals;

  return (
    <Styles.Wrapper {...props}>
      <Styles.Title>Total:</Styles.Title>
      <Styles.Value>{formatPrice.format(items)}</Styles.Value>
    </Styles.Wrapper>
  );
};

export default TotalCart;
