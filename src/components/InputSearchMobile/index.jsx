import { bool } from 'prop-types';
import React, { useState } from 'react';

import Styles from './styles';

const InputSearchMobile = ({ isOpen }) => {
  const [searchVal, setSearchVal] = useState('');

  const handleOnChange = (event) => setSearchVal(event.target.value);
  return (
    <Styles.Wrapper isOpen={isOpen}>
      <Styles.Input
        onChange={handleOnChange}
        placeholder="Search product"
        value={searchVal}
      />
    </Styles.Wrapper>
  );
};

InputSearchMobile.propTypes = {
  isOpen: bool,
};

InputSearchMobile.defaultProps = {
  isOpen: false,
};

export default InputSearchMobile;
