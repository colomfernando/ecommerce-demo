import styled from 'styled-components';
import Button from 'components/Button';
import Icon from 'components/Icon';
import colors from 'theme/colors';
import EmptyCartMessage from 'components/EmptyCartMessage';

const Wrapper = styled.div`
  display: flex;
  position: relative;
  height: 100vh;
  flex-flow: column nowrap;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 10px;
  margin-bottom: 10px;
  background-color: ${colors.grey[200]};
  border-bottom: 4px solid ${colors.primary.main};
`;

const Title = styled.p`
  font-weight: 700;
  text-transform: capitalize;
`;

const ProductList = styled.ul`
  height: calc(100vh - 160px);
  overflow-y: auto;
  overflow-x: hidden;
`;

const Product = styled.li`
  padding: 10px 0;
`;

const TrashButton = styled(Button)``;

const CloseButton = styled(Button)``;

const IconTrash = styled(Icon)``;
const IconClose = styled(Icon)``;

const Resume = styled.div`
  position: absolute;
  padding: 15px 10px;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: rgb(0 0 0 / 25%) 2px 2px 10px 0px;
`;

const EmptyCart = styled(EmptyCartMessage)`
  height: 100vh;
  & > p {
    margin-top: 40px;
  }
`;

const FinishBuy = styled(Button)`
  width: 100%;
`;

Wrapper.displayName = 'Wrapper';

export default {
  Wrapper,
  Header,
  IconTrash,
  CloseButton,
  IconClose,
  ProductList,
  Product,
  TrashButton,
  Title,
  EmptyCart,
  Resume,
  FinishBuy,
};
