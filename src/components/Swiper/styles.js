import styled from 'styled-components';
import { Swiper as SwiperComp, SwiperSlide } from 'swiper/react';
import colors from 'theme/colors';

const Swiper = styled(SwiperComp)`
  ${({ pagination }) => pagination && `padding-bottom: 40px!important`};
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
      width: 30px;
      height: 5px;
      border-radius: 5px;
    }
  }

  & .swiper-pagination-bullet-active {
    background-color: ${colors.primary.main};
  }
`;

const Slider = styled(SwiperSlide)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Styles = { Swiper, Slider };

export default Styles;
