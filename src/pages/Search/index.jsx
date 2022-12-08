import React, { useState, useEffect } from 'react';
import MainLayout from 'Layout/MainLayout';
import ProductList from 'components/ProductList';
import useParams from 'hooks/useParams';
import searchProducts from 'services/product/searchProducts';

const Search = () => {
  const [products, setProducts] = useState({ data: [], isLoading: true });
  const params = useParams();

  const query = params.get();

  const getProducts = async () => {
    const data = await searchProducts({ filters: query });
    setProducts({ data, isLoading: false });
  };

  useEffect(() => {
    getProducts();
  }, [query.ft]);

  return (
    <MainLayout>
      <ProductList products={products.data} />
    </MainLayout>
  );
};

export default Search;
