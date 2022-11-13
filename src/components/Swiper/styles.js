import styled, { css } from 'styled-components';
import { Swiper as SwiperComp, SwiperSlide } from 'swiper/react';
import breakpoints from 'theme/breakpoints';
import colors from 'theme/colors';

const typeNavigation = {
  productSlider: css`
    & {
      position: initial;
    }
    & > .swiper-button-prev,
    & > .swiper-button-next {
      top: 10px;
      :after {
        font-size: 1.5rem;
      }
    }

    & > .swiper-button-prev {
      left: initial;
      right: 80px;
    }
  `,
};

const setType = (type) => {
  const navigation = typeNavigation[type];

  return [navigation];
};

const Swiper = styled(SwiperComp)`
  ${({ pagination }) =>
    pagination &&
    `
			padding: 20px 0 40px!important;
		`};
  ${({ pagination, navigation }) =>
    pagination &&
    navigation &&
    `
		& > .swiper-button-prev,
		& > .swiper-button-next {
			color: ${colors.primary.main};
			top: calc(50% - 15px);
		}
	`}
  & .swiper-pagination {
    bottom: 0;

    &-bullet {
      width: 15px;
      height: 5px;
      border-radius: 5px;
      ${breakpoints.md} {
        width: 30px;
      }
    }
  }

  & .swiper-pagination-bullet-active {
    background-color: ${colors.primary.main};
  }
  ${({ type }) => [...setType(type)]}
`;

const Slider = styled(SwiperSlide)`
  display: flex;
  justify-content: center;
`;

const Styles = { Swiper, Slider };

export default Styles;
