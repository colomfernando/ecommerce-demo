import React, { useState, useEffect } from 'react';
import MainLayout from 'Layout/MainLayout';
import ProductList from 'components/ProductList';
import useParamsUrl from 'hooks/useParamsUrl';
import searchProducts from 'services/product/searchProducts';

const Search = () => {
  const [products, setProducts] = useState({ data: [], isLoading: true });
  const params = useParamsUrl();

  const query = params.get();
  const getProducts = async () => {
    const searchData = await searchProducts({ filters: query });

    setProducts({
      data: searchData.products,
      filters: searchData.filters,
      isLoading: false,
    });
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <MainLayout>
      <ProductList products={products.data} filters={products.filters} />
    </MainLayout>
  );
};

export default Search;
