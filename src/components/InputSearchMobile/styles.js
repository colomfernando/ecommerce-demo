import styled from 'styled-components';
import Icon from 'components/Icon';
import colors from 'theme/colors';

const Wrapper = styled.div`
  position: absolute;
  top: 100%;
  display: flex;
  align-items: center;
  background-color: ${colors.white};
  width: 100%;
  box-shadow: 0px 3px 20px -10px rgba(0, 0, 0, 0.6);
  height: ${({ isOpen }) => (isOpen ? 'auto' : '0')};
  min-height: ${({ isOpen }) => (isOpen ? '60px' : '0')};
  overflow: hidden;
  z-index: ${({ isOpen }) => (isOpen ? '60' : '-1')};
  transition: all 0.3s;
  ${({ isOpen }) =>
    isOpen &&
    `
	  border-top: 0.5px solid ${colors.primary.main};
	`}
`;

const Input = styled.input`
  background-color: transparent;
  width: 100%;
  height: 40px;
  padding: 0 10px;
  border: none;
  outline: none;
`;

const IconSearch = styled(Icon)`
  margin-left: auto;
  margin-right: 10px;
`;
`
`;

Wrapper.displayName = 'inputSearch';

export default { Wrapper, Input, IconSearch };
