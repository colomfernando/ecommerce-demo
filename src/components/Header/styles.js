import styled from 'styled-components';
import colors from 'theme/colors';
import Button from 'components/Button';
import breakpoints from 'theme/breakpoints';

const Header = styled.header`
  width: 100%;
  position: relative;
  top: 0;
  position: sticky;
  display: flex;
  flex-flow: column nowrap;
  z-index: 100;
  box-shadow: 0px 3px 20px -10px rgba(0, 0, 0, 0.6);
`;

const InnerHeader = styled.div`
  padding: 5px 10px;
  ${breakpoints.md} {
    padding: 15px 20px;
  }
  background-color: ${colors.white};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Name = styled.p`
  margin-left: 10px;
  display: flex;
`;

const Actions = styled.div``;

const ButtonActionBase = styled(Button)`
  :not(:last-child) {
    margin-right: 15px;
  }
`;

const ButtonActionMobileSearch = styled(ButtonActionBase)`
  margin-left: auto;
`;

const ButtonActionCart = styled(ButtonActionBase)`
  position: relative;
`;

const ButtonAction = styled(ButtonActionBase)``;

const ItemsQty = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.primary.main};
  width: 20px;
  height: 20px;
  font-size: 10px;
  font-weight: 700;
  border-radius: 100%;
  text-align: center;
  color: ${colors.white};
  position: absolute;
  top: 5px;
  right: 5px;
`;

Header.displayName = 'Header';
export default {
  Header,
  Actions,
  InnerHeader,
  ButtonAction,
  ButtonActionCart,
  ButtonActionMobileSearch,
  LogoWrapper,
  ItemsQty,
  Name,
};
