import styled from 'styled-components';
import colors from 'theme/colors';

const Department = styled.h4`
  color: ${colors.white};
  text-transform: uppercase;
  cursor: pointer;
`;

Department.displayName = 'Department';

export default { Department };
