import React from 'react';
import MainLayout from 'Layout/MainLayout';
import ProductCard from 'components/ProductCard';
import MainBanner from 'components/MainBanner';
import ProductSlider from 'components/ProductSlider';
import dbProducts from '../db/products.json';

const Home = () => {
  return (
    <MainLayout>
      <MainBanner />
      <ProductSlider navigation title="Top Products">
        {dbProducts.map((prod) => (
          <ProductCard key={prod.id} {...prod} />
        ))}
      </ProductSlider>
      <ProductSlider navigation title="Sale Products">
        {dbProducts.map((prod) => (
          <ProductCard key={prod.id} {...prod} />
        ))}
      </ProductSlider>
    </MainLayout>
  );
};

export default Home;
