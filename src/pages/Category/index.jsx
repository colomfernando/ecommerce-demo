import React, { useEffect } from 'react';
import MainLayout from 'Layout/MainLayout';
import ProductList from 'components/ProductList';
import { useNavigate, useParams } from 'react-router-dom';
import useParamsUrl from 'hooks/useParamsUrl';
import searchProducts from 'services/product/searchProducts';
import getCategoriesFromUrl from 'utils/getCategoriesFromUrl';
import useBreadcrumb from 'hooks/useBreadcrumb';
import { useDispatch } from 'react-redux';
import {
  setFiltersAction,
  setResultsAction,
  setIsLoadingAction,
} from 'store/search';

const Category = () => {
  const paramsFromUrl = useParams();
  const breadcrumb = useBreadcrumb();
  const navigate = useNavigate();

  const params = useParamsUrl();
  const dispatch = useDispatch();

  const query = params.get();

  const getProducts = async () => {
    const categoriesFromUrl = await getCategoriesFromUrl(
      Object.values(paramsFromUrl)
    );

    if (!categoriesFromUrl.length) return navigate('/search');

    dispatch(setIsLoadingAction(true));
    const searchData = await searchProducts({
      filters: { ...query, c: categoriesFromUrl.map((cat) => cat.id) },
    });

    dispatch(setResultsAction(searchData.products));
    dispatch(setFiltersAction(searchData.filters));
    dispatch(setIsLoadingAction(false));
  };

  useEffect(() => {
    getProducts();
  }, [query]);

  return (
    <MainLayout>
      <ProductList breadcrumb={breadcrumb} />
    </MainLayout>
  );
};

export default Category;
