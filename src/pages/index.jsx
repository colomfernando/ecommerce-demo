import React, { useEffect, useState } from 'react';
import MainLayout from 'Layout/MainLayout';
import ProductCard from 'components/ProductCard';
import MainBanner from 'components/MainBanner';
import ProductSlider from 'components/ProductSlider';
import getRandomProducts from 'services/product/getRandomProducts';
const Home = () => {
  const [productsTop, setProductsTop] = useState([]);
  const [productsSale, setProductsSale] = useState([]);

  const getProducts = async () => {
    const dataTop = await getRandomProducts();
    const dataSale = await getRandomProducts();
    setProductsTop(dataTop);
    setProductsSale(dataSale);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <MainLayout>
      <MainBanner />
      <ProductSlider navigation title="Top Products">
        {!!productsTop.length &&
          productsTop.map((prod) => <ProductCard key={prod.id} {...prod} />)}
      </ProductSlider>
      <ProductSlider navigation title="Sale Products">
        {!!productsSale.length &&
          productsSale.map((prod) => <ProductCard key={prod.id} {...prod} />)}
      </ProductSlider>
    </MainLayout>
  );
};

export default Home;
