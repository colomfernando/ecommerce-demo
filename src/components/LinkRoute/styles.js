import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled(Link)`
  outline: none;
  text-decoration: none;
  color: inherit;
`;

Wrapper.displayName = 'LinkRoute';
export default { Wrapper };
