import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useParamsUrl from 'hooks/useParamsUrl';
import Styles from './styles';

const InputSearch = () => {
  const navigate = useNavigate();
  const params = useParamsUrl();

  const [searchVal, setSearchVal] = useState('');

  const handleOnChange = (event) => {
    const {
      target: { value },
    } = event;

    setSearchVal(value);
  };

  const handleSearch = (value) => {
    navigate({
      pathname: '/search',
      ...(value && { search: `?ft=${value}` }),
    });
  };

  const handleOnKeyDown = (event) => {
    if (event.key === 'Enter') handleSearch(searchVal);
  };

  useEffect(() => {
    const { ft } = params.get();

    if (!ft || !ft.length) return;
    const searchValue = ft[0] || '';

    if (searchValue) {
      setSearchVal(searchValue);
    }
  }, []);

  return (
    <Styles.Wrapper>
      <Styles.Input
        onChange={handleOnChange}
        onKeyDown={handleOnKeyDown}
        placeholder="Search product"
        value={searchVal}
      />
      <Styles.ActionSearch baseButton onClick={() => handleSearch(searchVal)}>
        <Styles.IconSearch name="search" size={20} />
      </Styles.ActionSearch>
    </Styles.Wrapper>
  );
};

export default InputSearch;
