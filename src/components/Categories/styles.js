import styled from 'styled-components';
import colors from 'theme/colors';

const Wrapper = styled.div`
  width: 100%;
  padding: 15px 0;
  background-color: ${colors.primary.main};
`;

const Inner = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  max-width: 1440px;
  margin: 0 auto;
`;

Wrapper.displayName = 'Categories';

export default { Wrapper, Inner };
