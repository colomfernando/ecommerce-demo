import { oneOfType, arrayOf, string, node, bool, func } from 'prop-types';
import React from 'react';
import Styles from './styles';

const Button = ({
  children,
  variant,
  color,
  onClick,
  baseButton = false,
  ...props
}) => {
  if (!children) return null;

  const ButtonComp = baseButton ? Styles.BaseButton : Styles.Button;
  return (
    <ButtonComp variant={variant} color={color} onClick={onClick} {...props}>
      {children}
    </ButtonComp>
  );
};

Button.propTypes = {
  baseButton: bool,
  variant: string,
  color: string,
  onClick: func,
  children: oneOfType([arrayOf(node), node]).isRequired,
};

Button.defaultProps = {
  baseButton: false,
  variant: 'contained',
  color: 'primary',
  onClick: null,
};

export default Button;
