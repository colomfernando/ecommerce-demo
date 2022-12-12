import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Styles from './styles';

// TODO: lógica buscador

const InputSearch = () => {
  const navigate = useNavigate();
  const [searchVal, setSearchVal] = useState('');

  const handleOnChange = (event) => {
    const {
      target: { value },
    } = event;
    setSearchVal(value);
  };

  const handleSearch = () => {
    navigate({
      pathname: '/search',
      ...(searchVal && { search: `?ft=${searchVal}` }),
    });
  };

  const handleOnKeyDown = (event) => {
    if (event.key === 'Enter') handleSearch();
  };

  return (
    <Styles.Wrapper>
      <Styles.Input
        onChange={handleOnChange}
        onKeyDown={handleOnKeyDown}
        placeholder="Search product"
        value={searchVal}
      />
      <Styles.ActionSearch baseButton onClick={handleSearch}>
        <Styles.IconSearch name="search" size={20} />
      </Styles.ActionSearch>
    </Styles.Wrapper>
  );
};

export default InputSearch;
