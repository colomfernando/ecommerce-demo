import styled from 'styled-components';
import colors from 'theme/colors';

const Header = styled.header`
  width: 100%;
  padding: 10px 20px;
  background-color: ${colors.white};
  display: flex;
`;

const Actions = styled.div`
  margin-left: auto;
`;

Header.displayName = 'Header';
export default { Header, Actions };
