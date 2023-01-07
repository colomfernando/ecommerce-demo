import { bool, func, string } from 'prop-types';
import React, { useState } from 'react';
import Styles from './styles';

const Checkbox = ({
  label,
  onChange,
  defaultCheck = false,
  isSelected = false,
  disabled = false,
  ...props
}) => {
  const [isChecked, setIsChecked] = useState(defaultCheck || isSelected);

  const handleOnClick = () => {
    const valueChecked = !isChecked;
    setIsChecked(valueChecked);
    if (onChange) onChange(valueChecked);
  };
  return (
    <Styles.Wrapper onClick={handleOnClick} {...props}>
      <Styles.Check checked={isChecked} />
      <Styles.Input
        type="checkbox"
        checked={isChecked}
        onChange={handleOnClick}
        disabled={disabled}
      />
      <Styles.Text>{label}</Styles.Text>
    </Styles.Wrapper>
  );
};

Checkbox.propTypes = {
  label: string.isRequired,
  defaultCheck: bool,
  isSelected: bool,
  disabled: bool,
  onChange: func,
};

Checkbox.defaultProps = {
  defaultCheck: false,
  disabled: false,
  isSelected: false,
  onChange: () => {},
};

export default Checkbox;
