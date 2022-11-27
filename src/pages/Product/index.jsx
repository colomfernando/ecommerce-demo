import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MainLayout from 'Layout/MainLayout';
import getProductById from 'services/product/getProductById';
import MainBanner from './components/MainBanner';

export const ProductContext = React.createContext({});

const Product = () => {
  const { skuId: skuIdParam } = useParams();
  const [productData, setProductData] = useState({});

  const getData = async () => {
    const data = await getProductById(skuIdParam);
    setProductData(data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <ProductContext.Provider value={productData}>
      <MainLayout>
        <MainBanner />
      </MainLayout>
    </ProductContext.Provider>
  );
};

export default Product;
