import styled from 'styled-components';
import colors from 'theme/colors';

const Wrapper = styled.div`
  width: 100%;
  max-width: 280px;
  border-radius: 8px;
  border: 1px solid ${colors.grey[200]};
`;

Wrapper.displayName = 'ProductCard';

export default { Wrapper };
