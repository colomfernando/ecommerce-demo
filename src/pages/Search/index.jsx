import React from 'react';
import MainLayout from 'Layout/MainLayout';
import ProductList from 'components/ProductList';
import useParams from 'hooks/useParams';
import dbProducts from '../../db/products.json';
const Search = () => {
  const params = useParams();
  console.log('params :>> ', params.get());

  return (
    <MainLayout>
      <ProductList products={dbProducts} />
    </MainLayout>
  );
};

export default Search;
