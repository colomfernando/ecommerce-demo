import { string } from 'prop-types';
import React from 'react';
import Styles from './styles';

const ProductName = ({ name, ...props }) => {
  if (!name) return null;
  return <Styles.Name {...props}>{String(name)}</Styles.Name>;
};

ProductName.propTypes = {
  name: string.isRequired,
};

export default ProductName;
