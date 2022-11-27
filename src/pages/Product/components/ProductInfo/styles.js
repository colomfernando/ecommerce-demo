import ProductBrand from 'components/ProductBrand';
import styled from 'styled-components';
import ProductName from 'components/ProductName';
import Button from 'components/Button';
import Prices from 'components/Prices';
import QtySelector from 'components/QtySelector';
import breakpoints from 'theme/breakpoints';

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  padding: 20px;
  ${breakpoints.md} {
    width: 300px;
  }
`;

const Name = styled(ProductName)`
  margin: 20px 0;
  font-size: 3rem;
`;

const Brand = styled(ProductBrand)`
  font-size: 0.9rem;
`;

const Description = styled.p`
  margin: 15px 0;
`;

const Price = styled(Prices)`
  font-size: 1.5rem;
`;

const Qty = styled(QtySelector)`
  margin-top: 25px;

  ${breakpoints.md} {
    width: 300px;
  }
`;

const BuyButton = styled(Button)`
  margin-top: 15px;
  ${breakpoints.md} {
    width: 300px;
  }
  ${({ isItemInOrder }) =>
    !isItemInOrder &&
    `
		margin-top: 85px;
	`}
`;

Wrapper.displayName = 'ProductInfo';

export default { Wrapper, Name, Brand, Price, Description, Qty, BuyButton };
