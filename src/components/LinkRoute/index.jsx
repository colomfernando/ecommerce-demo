import { arrayOf, func, node, oneOfType, string } from 'prop-types';
import React from 'react';
import Styles from './styles';

const LinkRoute = ({ to, cbOnClick, children, ...props }) => {
  if (!to || !children) return null;

  const handleOnclick = () => {
    if (cbOnClick) cbOnClick();
  };

  return (
    <Styles.Wrapper onClick={handleOnclick} to={to} {...props}>
      {children}
    </Styles.Wrapper>
  );
};

LinkRoute.propTypes = {
  children: oneOfType([node, arrayOf(node)]).isRequired,
  to: string.isRequired,
  cbOnClick: func,
};

LinkRoute.defaultProps = {
  cbOnClick: null,
};

export default LinkRoute;
