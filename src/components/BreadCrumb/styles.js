import styled from 'styled-components';
import colors from 'theme/colors';
import LinkRoute from 'components/LinkRoute';

const Wrapper = styled.div`
  padding-left: 15px;
  margin: 30px 0 0;
`;

const CategoryLink = styled(LinkRoute)``;

const Separator = styled.span`
  color: ${colors.primary.main};
  margin: 0 10px;
`;
const Category = styled.span`
  color: ${colors.primary.main};
`;

export default { Wrapper, CategoryLink, Category, Separator };
