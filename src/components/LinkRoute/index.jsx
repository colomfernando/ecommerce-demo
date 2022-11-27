import { arrayOf, node, oneOfType, string } from 'prop-types';
import React from 'react';
import Styles from './styles';

const LinkRoute = ({ to, children, ...props }) => {
  if (!to || !children) return null;
  return (
    <Styles.Wrapper to={to} {...props}>
      {children}
    </Styles.Wrapper>
  );
};

LinkRoute.propTypes = {
  children: oneOfType([node, arrayOf(node)]).isRequired,
  to: string.isRequired,
};

export default LinkRoute;
