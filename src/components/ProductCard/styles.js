import styled from 'styled-components';
import colors from 'theme/colors';
import Prices from 'components/Prices';
import Button from 'components/Button';

const Wrapper = styled.div`
  width: 100%;
  max-width: 300px;
  border-radius: 8px;
  display: flex;
  flex-flow: column nowrap;
  cursor: pointer;
  transition: transform 0.25s cubic-bezier(0.215, 0.61, 0.355, 1),
    background 0.15s cubic-bezier(0.215, 0.61, 0.355, 1),
    box-shadow 0.25s cubic-bezier(0.215, 0.61, 0.355, 1);
  &:hover {
    transform: scale3d(1.03, 1.03, 1);
    z-index: 1;
    box-shadow: 0 20px 40px -20px rgba(0, 0, 0, 0.6);
  }
`;

const WrapperImage = styled.div`
  background-color: ${colors.grey[100]};
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

const WrapperInfo = styled.div`
  display: flex;
  flex-flow: column nowrap;
  padding: 10px;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  aspect-ratio: 1/1;
`;

const Name = styled.h4`
  margin-bottom: 10px;
`;

const Brand = styled.span`
  margin: 15px 0 5px;
  font-size: 0.8rem;
  color: ${colors.grey[600]};
`;

const Price = styled(Prices)`
  margin: 10px 0 10px; ;
`;

const BuyButton = styled(Button)`
  margin-top: 10px;
`;

Wrapper.displayName = 'ProductCard';

export default {
  Wrapper,
  Image,
  Brand,
  WrapperImage,
  WrapperInfo,
  Name,
  Price,
  BuyButton,
};
