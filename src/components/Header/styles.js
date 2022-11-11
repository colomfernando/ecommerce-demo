import styled from 'styled-components';
import colors from 'theme/colors';
import Button from 'components/Button';
import breakpoints from 'theme/breakpoints';

const Header = styled.header`
  width: 100%;
  padding: 15px 20px;
  background-color: ${colors.white};
  display: flex;
  align-items: center;
  justify-content: space-between;
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
