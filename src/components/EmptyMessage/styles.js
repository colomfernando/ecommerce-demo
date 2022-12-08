import styled from 'styled-components';
import Icon from 'components/Icon';

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;

const EmptyIcon = styled(Icon)``;

const Text = styled.p`
  font-size: 1.2rem;
  margin-top: 20px;
`;

Wrapper.displayName = 'EmptyCartMessage';

export default { Wrapper, EmptyIcon, Text };
