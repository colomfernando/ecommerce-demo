import styled from 'styled-components';

const Wrapper = styled.div`
  padding-bottom: 20px;
`;

const Inner = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  position: relative;
`;

Wrapper.displayName = 'MainLayout';

export default { Wrapper, Inner };
