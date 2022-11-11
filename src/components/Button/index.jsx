import { oneOfType, arrayOf, node, bool, func } from 'prop-types';
import React from 'react';
import Styles from './styles';

const Button = ({ children, onClick, baseButton = false, ...props }) => {
  if (!children) return null;

  const ButtonComp = baseButton ? Styles.BaseButton : Styles.Button;
  return (
    <ButtonComp onClick={onClick} {...props}>
      {children}
    </ButtonComp>
  );
};

Button.propTypes = {
  baseButton: bool,
  onClick: func,
  children: oneOfType([arrayOf(node), node]).isRequired,
};

Button.defaultProps = {
  baseButton: false,
  onClick: null,
};

export default Button;
