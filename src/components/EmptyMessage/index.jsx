import { string } from 'prop-types';
import React from 'react';
import Styles from './styles';

const EmptyMessage = ({ text, ...props }) => {
  return (
    <Styles.Wrapper {...props}>
      <Styles.EmptyIcon name="emptyCart" size={80} />
      {text && <Styles.Text>{text}</Styles.Text>}
    </Styles.Wrapper>
  );
};

EmptyMessage.propTypes = {
  text: string.isRequired,
};

export default EmptyMessage;
