import styled from 'styled-components';
import colors from 'theme/colors';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.p`
  font-weight: 700;
  text-transform: uppercase;
`;

const Value = styled.span`
  font-weight: 700;
  color: ${colors.primary.main};
`;

Wrapper.displayName = 'Totals';

export default { Wrapper, Title, Value };
