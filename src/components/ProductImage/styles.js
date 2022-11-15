import styled from 'styled-components';
import colors from 'theme/colors';

const mapSize = {
  small: '90px',
  medium: '260px',
  large: '400px',
};

const Wrapper = styled.div`
  background-color: ${colors.grey[300]};
  max-width: ${({ size }) => mapSize[size]};
  border-radius: 8px;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  ${({ square }) => square && 'aspect-ratio: 1/1;'}
`;

Wrapper.displayName = 'Image';

export default { Wrapper, Image };
