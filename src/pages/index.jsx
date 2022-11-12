import React from 'react';
import MainLayout from 'Layout/MainLayout';
import ProductCard from 'components/ProductCard';
import MainBanner from 'components/MainBanner';
import Swiper from 'components/Swiper';

const Home = () => {
  return (
    <MainLayout>
      <MainBanner />
      <div
        style={{
          padding: '30px',
          width: '1600px',
          display: 'flex',
          margin: '0 auto',
        }}
      >
        <Swiper
          style={{ marginTop: '30px', padding: '30px' }}
          slidesPerView={4}
          pagination={{ clickable: true }}
        >
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </Swiper>
      </div>
    </MainLayout>
  );
};

export default Home;
