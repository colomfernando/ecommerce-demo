import styled from 'styled-components';
import ProductImage from 'components/ProductImage';
import ProductBrand from 'components/ProductBrand';
import ProductPrices from 'components/Prices';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
`;

const Image = styled(ProductImage)``;

const WrapperInfo = styled.div`
  display: flex;
  flex-flow: column nowrap;
  margin-left: 10px;
`;

const Name = styled.h4`
  margin-bottom: 5px;
`;

const Brand = styled(ProductBrand)`
  margin-bottom: 5px;
`;

const Prices = styled(ProductPrices)`
  margin-top: auto;
`;

Wrapper.displayName = 'ProductCardSmall';

export default { Wrapper, Image, WrapperInfo, Name, Brand, Prices };
