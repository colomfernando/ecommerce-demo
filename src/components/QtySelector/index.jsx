import { number, oneOf } from 'prop-types';
import React from 'react';
import Styles from './styles';

const QtySelector = ({ qty, type, ...props }) => {
  const qtyToShow = !qty ? 1 : qty;
  return (
    <Styles.Wrapper {...props} type={type}>
      <Styles.MinusButton type={type}>-</Styles.MinusButton>
      <Styles.Qty disabled type={type}>
        {qtyToShow}
      </Styles.Qty>
      <Styles.PlusButton type={type}>+</Styles.PlusButton>
    </Styles.Wrapper>
  );
};

QtySelector.propTypes = {
  qty: number,
  type: oneOf(['vertical', 'horizontal']),
};

QtySelector.defaultProps = {
  qty: 1,
  type: 'horizontal',
};

export default QtySelector;
