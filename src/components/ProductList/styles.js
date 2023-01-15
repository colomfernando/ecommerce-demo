import styled from 'styled-components';
import ProductCard from 'components/ProductCard';
import EmptyMessage from 'components/EmptyMessage';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  padding-top: 80px;
`;
const Aside = styled.aside`
  flex-basis: 20%;
`;

const List = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(260px, 260px));
  gap: 2.5rem 1rem;
`;

const EmptyResult = styled(EmptyMessage)`
  margin: 30px auto;
`;

const Product = styled(ProductCard)``;

Wrapper.displayName = 'ProductList';

export default { Wrapper, Aside, List, Product, EmptyResult };
