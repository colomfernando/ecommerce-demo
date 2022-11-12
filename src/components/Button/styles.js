import styled, { css } from 'styled-components';
import { setColorByProp, setColor, setTextColorByProp } from 'theme/utils';

const setVariant = (variant) => {
  switch (variant) {
    case 'contained':
      return css`
        background-color: ${({ color }) => setColorByProp(color)};
        color: ${({ color }) => setTextColorByProp(color)};
        border: ${({ color }) => `2px solid ${setColorByProp(color)}`};
        &:hover {
          background-color: ${({ color }) => setColor(color, 'dark')};
          border: ${({ color }) => `2px solid ${setColor(color, 'dark')}`};
        }
        &:active {
          background-color: ${({ color }) => setColor(color, 'light')};
          border: ${({ color }) => `2px solid ${setColor(color, 'light')}`};
        }
      `;

    case 'outlined':
      return css`
        border: ${({ color }) => `2px solid ${setColorByProp(color)}`};
        color: ${({ color }) => setColorByProp(color)};
        &:hover {
          border: ${({ color }) => `2px solid ${setColor(color, 'dark')}`};
        }
        &:active {
          background-color: ${({ color }) => setColor(color, 'light')};
          border: ${({ color }) => `2px solid ${setColor(color, 'light')}`};
          color: ${({ color }) => setTextColorByProp(color)};
        }
      `;
    default:
      return ``;
  }
};

const BaseButton = styled.button`
  text-transform: uppercase;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background-color: transparent;
  outlined: none;
  border: 1px solid transparent;
  border: none;
  cursor: pointer;
`;
const Button = styled(BaseButton)`
  border-radius: 5px;
  cursor: pointer;
  ${({ variant }) => setVariant(variant)};
`;

Button.displayName = 'Button';
export default { Button, BaseButton };
