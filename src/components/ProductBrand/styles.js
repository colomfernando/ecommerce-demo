import styled from 'styled-components';
import colors from 'theme/colors';

const Brand = styled.span`
  font-size: 0.8rem;
  text-transform: capitalize;
  color: ${colors.grey[600]};
`;

Brand.displayName = 'Brand';
export default { Brand };
