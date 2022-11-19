import styled, { css } from 'styled-components';
import Button from 'components/Button';

const typeMap = {
  horizontal: {
    wrapper: css`
      width: 100%;
      flex-flow: row nowrap;
    `,
    buttons: css`
      flex-basis: 20%;
    `,
    input: css`
      flex-basis: 60%;
    `,
  },
  vertical: {
    wrapper: css`
      flex-flow: column nowrap;
      height: 100%;
      justify-content: space-between;
    `,
    buttons: css`
      width: 30px;
      height: 28px;
    `,
    input: css`
      height: 30px;
    `,
  },
};

const Wrapper = styled.div`
  display: flex;
  ${({ type }) => typeMap[type].wrapper};
`;

const BaseButton = styled(Button)`
  ${({ type }) => typeMap[type].buttons};
`;

const PlusButton = styled(BaseButton)``;

const MinusButton = styled(BaseButton)``;

const Qty = styled.span`
  display: flex;

  justify-content: center;
  align-items: center;
  ${({ type }) => typeMap[type].input};
`;

Wrapper.displayName = 'QtySelector';

export default {
  Wrapper,
  PlusButton,
  MinusButton,
  Qty,
};
