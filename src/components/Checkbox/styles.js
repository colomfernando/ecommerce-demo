import styled from 'styled-components';
import colors from 'theme/colors';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Check = styled.span`
  width: 20px;
  height: 20px;
  position: relative;
  border: 1px solid ${colors.primary.main};
  border-radius: 4px;
  background-color: ${({ checked }) =>
    checked ? colors.primary.main : colors.white};

  ${({ checked }) =>
    checked &&
    `
			&::before {
			content: "\\2713";
			font-size: .9rem;
			top: 2px;
			right: 4px;
			color: ${colors.white};
			position: absolute;
		}
	`}
`;

const Input = styled.input`
  cursor: inherit;
  appearance: none;
`;

const Text = styled.span`
  margin-left: 10px;
  text-transform: capitalize;
  cursor: pointer;
  user-select: none;
`;

Wrapper.displayName = 'Checkbox';

export default { Wrapper, Text, Check, Input };
