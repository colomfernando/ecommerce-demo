import React, { useEffect } from 'react';
import MainLayout from 'Layout/MainLayout';
import ProductList from 'components/ProductList';
import useParamsUrl from 'hooks/useParamsUrl';
import searchProducts from 'services/product/searchProducts';
import { useDispatch } from 'react-redux';
import {
  setInitialFiltersAction,
  setResultsAction,
  setIsLoadingAction,
} from 'store/search';

const Search = () => {
  const params = useParamsUrl();
  const dispatch = useDispatch();

  const query = params.get();
  const getProducts = async () => {
    dispatch(setIsLoadingAction(true));
    const searchData = await searchProducts({ filters: query });
    console.log('searchData :>> ', searchData);
    dispatch(setResultsAction(searchData.products));
    dispatch(setInitialFiltersAction(searchData.filters));
    dispatch(setIsLoadingAction(false));
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <MainLayout>
      <ProductList />
    </MainLayout>
  );
};

export default Search;
