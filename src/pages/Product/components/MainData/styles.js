import ProductImage from 'components/ProductImage';
import styled from 'styled-components';
import breakpoints from 'theme/breakpoints';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  ${breakpoints.md} {
    max-width: 960px;
    margin: 0 auto;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: flex-start;
  }
`;

const WrapperSlider = styled.div`
  ${breakpoints.md} {
    width: 60%;
  }
`;

const Img = styled(ProductImage)``;

Wrapper.displayName = 'MainData';

export default { Wrapper, WrapperSlider, Img };
