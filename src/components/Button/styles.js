import styled from 'styled-components';

const BaseButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
const Button = styled.button`
  border-radius: 8px;
  cursor: pointer;
`;

Button.displayName = 'Button';
export default { Button, BaseButton };
