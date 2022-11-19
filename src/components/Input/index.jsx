import React, { forwardRef } from 'react';
import Styles from './styles';

const Input = ({ ...props }, ref) => {
  return <Styles.Input {...props} ref={ref} />;
};

export default forwardRef(Input);
