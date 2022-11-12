import React from 'react';
import Swiper from 'components/Swiper';
import Styles from './styles';

const MainBanner = () => {
  return (
    <Swiper pagination={{ clickable: true }}>
      <Styles.Wrapper>
        <Styles.Banner src={`${process.env.PUBLIC_URL}/assets/banner-1.png`} />
      </Styles.Wrapper>
      <Styles.Wrapper>
        <Styles.Banner src={`${process.env.PUBLIC_URL}/assets/banner-2.png`} />
      </Styles.Wrapper>
    </Swiper>
  );
};

export default MainBanner;
