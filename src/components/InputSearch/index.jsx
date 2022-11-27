import React, { useState } from 'react';
import Styles from './styles';

// TODO: lógica buscador

const InputSearch = () => {
  const [searchVal, setSearchVal] = useState('');

  const handleOnChange = (event) => setSearchVal(event.target.value);

  return (
    <Styles.Wrapper>
      <Styles.Input
        onChange={handleOnChange}
        placeholder="Search product"
        value={searchVal}
      />
      <Styles.IconSearch name="search" size={20} />
    </Styles.Wrapper>
  );
};

export default InputSearch;
