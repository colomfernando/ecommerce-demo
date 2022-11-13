import React from 'react';
import MainLayout from 'Layout/MainLayout';
import ProductCard from 'components/ProductCard';
import MainBanner from 'components/MainBanner';
import ProductSlider from 'components/ProductSlider';

const Home = () => {
  return (
    <MainLayout>
      <MainBanner />
      <ProductSlider navigation title="Top Products">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </ProductSlider>
      <ProductSlider navigation title="Sale Products">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </ProductSlider>
    </MainLayout>
  );
};

export default Home;
