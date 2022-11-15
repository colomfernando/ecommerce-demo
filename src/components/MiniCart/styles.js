import styled from 'styled-components';
import Button from 'components/Button';
import Icon from 'components/Icon';
import colors from 'theme/colors';

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: ${colors.grey[200]};
  margin-bottom: 20px;
`;

const Title = styled.p`
  font-weight: 700;
  text-transform: capitalize;
`;

const TrashButton = styled(Button)`
  margin-left: auto;
`;

const IconTrash = styled(Icon)``;

Wrapper.displayName = 'Wrapper';

export default { Wrapper, Header, IconTrash, TrashButton, Title };
