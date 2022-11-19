import { oneOf } from 'prop-types';
import React from 'react';
import Styles from './styles';

const QtySelector = ({ type, ...props }) => {
  return (
    <Styles.Wrapper {...props} type={type}>
      <Styles.MinusButton type={type}>-</Styles.MinusButton>
      <Styles.Qty disabled type={type}>
        124
      </Styles.Qty>
      <Styles.PlusButton type={type}>+</Styles.PlusButton>
    </Styles.Wrapper>
  );
};

QtySelector.propTypes = {
  type: oneOf(['vertical', 'horizontal']),
};

QtySelector.defaultProps = {
  type: 'horizontal',
};

export default QtySelector;
