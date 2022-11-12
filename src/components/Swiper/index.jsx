import React from 'react';
import { Navigation, Pagination } from 'swiper';
import Styles from './styles';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { arrayOf, bool, func, node, number, oneOfType } from 'prop-types';

const Swiper = ({
  children,
  slidesPerView = 1,
  spaceBetween = 0,
  navigation = false,
  pagination = false,
  onSwiper,
  ...props
}) => {
  const hasModules = navigation ? [Navigation] : [];
  const hasPagination = Object.keys(pagination).length ? [Pagination] : [];

  const modules = [...hasModules, ...hasPagination].filter(Boolean);
  const childrenArr = Array.isArray(children) ? children : [children];

  return (
    <Styles.Swiper
      slidesPerView={slidesPerView}
      spaceBetween={spaceBetween}
      navigation={navigation}
      pagination={pagination}
      modules={modules}
      onSwiper={onSwiper}
      {...props}
    >
      {childrenArr.map((child, idx) => (
        <Styles.Slider key={idx.toString()}>{child}</Styles.Slider>
      ))}
    </Styles.Swiper>
  );
};

Swiper.propTypes = {
  children: oneOfType([node, arrayOf(node)]).isRequired,
  slidesPerView: number,
  spaceBetween: number,
  navigation: bool,
  pagination: bool,
  onSwiper: func,
};

Swiper.defaultProps = {
  slidesPerView: 1,
  spaceBetween: 0,
  navigation: false,
  pagination: false,
  onSwiper: null,
};

export default Swiper;
