import styled from 'styled-components';
import Icon from 'components/Icon';
import breakpoints from 'theme/breakpoints';
import colors from 'theme/colors';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 10px;
  background-color: ${colors.grey[200]};
  border-radius: 8px;
  max-width: 300px;
  width: 100%;
  ${breakpoints.md} {
    max-width: 600px;
  }
`;

const Input = styled.input`
  background-color: transparent;
  width: 90%;
  height: 40px;
  padding: 0 10px;
  border: none;
  outline: none;
`;

const IconSearch = styled(Icon)`
  margin-left: auto;
  margin-right: 10px;
`;
`
`;

Wrapper.displayName = 'inputSearch';

export default { Wrapper, Input, IconSearch };
