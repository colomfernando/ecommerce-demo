import styled from 'styled-components';
import colors from 'theme/colors';
import Button from 'components/Button';
import breakpoints from 'theme/breakpoints';

const Header = styled.header`
  width: 100%;
  top: 0;
  position: sticky;
  padding: 15px 20px;
  background-color: ${colors.white};
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 100;
  box-shadow: 0px 3px 20px -10px rgba(0, 0, 0, 0.6);
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Name = styled.p`
  display: none;
  ${breakpoints.md} {
    margin-left: 10px;
    display: flex;
  }
`;

const Actions = styled.div``;

const ButtonAction = styled(Button)`
  :not(:last-child) {
    margin-right: 20px;
  }
`;

Header.displayName = 'Header';
export default { Header, Actions, ButtonAction, LogoWrapper, Name };
