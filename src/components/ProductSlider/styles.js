import styled from 'styled-components';
import Swiper from 'components/Swiper';

const Wrapper = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 100px auto;
  position: relative;
`;

const Slider = styled(Swiper)``;

const Title = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 20px;
  padding-left: 10px;
`;

Wrapper.displayName = 'ProductSlider';

export default { Wrapper, Slider, Title };
