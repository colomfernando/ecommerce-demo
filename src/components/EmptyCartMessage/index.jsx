import React from 'react';
import Styles from './styles';

const EmptyCartMessage = ({ ...props }) => {
  return (
    <Styles.Wrapper {...props}>
      <Styles.EmptyIcon name="emptyCart" size={80} />
      <Styles.Text>Your cart is empty</Styles.Text>
    </Styles.Wrapper>
  );
};

export default EmptyCartMessage;
