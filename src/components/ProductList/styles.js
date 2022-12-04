import styled from 'styled-components';
import ProductCard from 'components/ProductCard';

const Wrapper = styled.div`
  display: flex;
`;
const Filters = styled.aside`
  flex-basis: 20%;
`;

const List = styled.div`
  display: grid;
  flex-basis: 80%;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2.5rem 1rem;
  align-items: center;
`;

const Product = styled(ProductCard)``;

Wrapper.displayName = 'ProductList';

export default { Wrapper, Filters, List, Product };
