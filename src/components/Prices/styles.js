import styled from 'styled-components';
import colors from 'theme/colors';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const BasePrice = styled.p`
  font-weight: 700;
`;

const BestPrice = styled(BasePrice)``;

const ListPrice = styled(BasePrice)`
  ${({ hasBestPrice }) =>
    hasBestPrice &&
    `	
			font-weight: initial;
			text-decoration: line-through;
			font-size: 0.8rem;
			margin-left: 8px;
			color: ${colors.grey[600]}
		`}
`;

Wrapper.displayName = 'Prices';

export default { Wrapper, BestPrice, ListPrice };
