import styled from 'styled-components';

const Wrapper = styled.div``;

const Filters = styled.div``;

const TitleFilter = styled.h4`
  text-transform: uppercase;
  cursor: pointer;
  margin-bottom: 20px;
`;

const Filter = styled.div`
  :not(:last-child) {
    margin-bottom: 15px;
  }
`;

Wrapper.displayName = 'Filters';

export default { Wrapper, Filters, TitleFilter, Filter };
