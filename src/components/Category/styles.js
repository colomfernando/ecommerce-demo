import styled from 'styled-components';
import colors from 'theme/colors';

const Wrapper = styled.div`
  padding: 0 10px;
  width: 30%;
  display: flex;
  flex-flow: column nowrap;
`;

const Link = styled.a`
  cursor: pointer;
  color: inherit;
  text-decoration: inherit;
`;

const Category = styled(Link)`
  margin-bottom: 20px;
  font-weight: 700;
  text-transform: uppercase;
`;

const SubCategory = styled(Link)`
  font-weight: 300;
  :hover {
    color: ${colors.primary.dark};
  }
  :not(:last-child) {
    margin-bottom: 10px;
  }
`;

Wrapper.displayName = 'Category';

export default { Wrapper, Category, SubCategory, Link };
