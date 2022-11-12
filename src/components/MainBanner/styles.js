import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 20px auto;
  width: 100%;
  max-width: 1600px;
  height: 350px;
`;

const Link = styled.a``;

const Banner = styled.img`
  width: 100%;
  height: auto;
`;

Wrapper.displayName = 'MainBanner';
export default { Wrapper, Banner, Link };
