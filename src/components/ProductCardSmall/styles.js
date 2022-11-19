import styled from 'styled-components';
import ProductImage from 'components/ProductImage';
import ProductBrand from 'components/ProductBrand';
import ProductPrices from 'components/Prices';
import QtySelector from 'components/QtySelector';

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
  font-size: 0.85rem;
`;

const Brand = styled(ProductBrand)`
  margin-bottom: 5px;
`;

const Prices = styled(ProductPrices)`
  margin-top: auto;
`;

const Qty = styled(QtySelector)`
  margin-left: auto;
  margin-right: 5px;
`;

Wrapper.displayName = 'ProductCardSmall';

export default { Wrapper, Image, WrapperInfo, Name, Brand, Prices, Qty };
