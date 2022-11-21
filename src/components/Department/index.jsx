import { arrayOf, node, oneOfType, func } from 'prop-types';
import React from 'react';
import Styles from './styles';

const Department = ({ children, onMouseEnter, onMouseLeave }) => {
  if (!children) return null;

  return (
    <Styles.Department onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {children}
    </Styles.Department>
  );
};

Department.propTypes = {
  onMouseEnter: func,
  onMouseLeave: func,
  children: oneOfType([arrayOf(node), node]).isRequired,
};

Department.defaultProps = {
  onMouseEnter: null,
  onMouseLeave: null,
};

export default Department;
