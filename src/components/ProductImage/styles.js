import styled from 'styled-components';

const mapSize = {
  small: '80px',
  medium: '260px',
  large: '350px',
};

const Wrapper = styled.div`
  max-width: ${({ size }) => mapSize[size]};
`;

const Image = styled.img`
  border-radius: inherit;
  width: 100%;
  height: auto;
  ${({ square }) => square && 'aspect-ratio: 1/1;'}
`;

Wrapper.displayName = 'Image';

export default { Wrapper, Image };
