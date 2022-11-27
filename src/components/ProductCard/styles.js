import styled from 'styled-components';
import colors from 'theme/colors';
import Prices from 'components/Prices';
import Button from 'components/Button';
import ProductImage from 'components/ProductImage';
import ProductBrand from 'components/ProductBrand';
import QtySelector from 'components/QtySelector';
import breakpoints from 'theme/breakpoints';
import LinkRoute from 'components/LinkRoute';

const Wrapper = styled.div`
  width: 100%;
  max-width: 260px;
  border-radius: 8px;
  display: flex;
  flex-flow: column nowrap;
  box-shadow: 0 5px 20px -10px rgba(0, 0, 0, 0.9);

  ${breakpoints.md} {
    box-shadow: initial;
    transition: transform 0.25s cubic-bezier(0.215, 0.61, 0.355, 1),
      background 0.15s cubic-bezier(0.215, 0.61, 0.355, 1),
      box-shadow 0.25s cubic-bezier(0.215, 0.61, 0.355, 1);
    &:hover {
      transform: scale3d(1.03, 1.03, 1);
      z-index: 1;
      box-shadow: 0 5px 20px -10px rgba(0, 0, 0, 0.9);
    }
  }
`;

const Link = styled(LinkRoute)``;

const WrapperInfo = styled.div`
  display: flex;
  flex-flow: column nowrap;
  padding: 10px;
`;

const Image = styled(ProductImage)`
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 0px;
  border-bottom-left-radius: 0px;
`;

const Name = styled.h4`
  margin-bottom: 10px;
`;

const Brand = styled(ProductBrand)`
  margin: 15px 0 5px;
  font-size: 0.8rem;
  color: ${colors.grey[600]};
`;

const Price = styled(Prices)`
  margin: 10px 0 10px; ;
`;

const Qty = styled(QtySelector)`
  margin-top: 15px;
`;

const BuyButton = styled(Button)`
  margin-top: 15px;
  ${({ isItemInOrder }) =>
    !isItemInOrder &&
    `
		margin-top: 74.69px;
	`}
`;

Wrapper.displayName = 'ProductCard';

export default {
  Wrapper,
  Image,
  Brand,
  Link,
  WrapperInfo,
  Name,
  Price,
  Qty,
  BuyButton,
};
