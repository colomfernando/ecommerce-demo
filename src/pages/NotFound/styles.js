import styled from 'styled-components';
import Icon from 'components/Icon';

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  height: calc(60vh);
`;

const IconNotFound = styled(Icon)`
  margin-bottom: 30px;
`;

const Message = styled.span``;

Wrapper.displayName = 'NotFound';
export default { Wrapper, IconNotFound, Message };
