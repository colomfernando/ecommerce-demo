import styled from 'styled-components';
import colors from 'theme/colors';

const Wrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-flow: column nowrap;
`;

const Departments = styled.div`
  width: 100%;
  padding: 15px 0;
  background-color: ${colors.primary.main};
`;

const InnerBase = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 10px;
  width: 100%;
`;

const InnerDepartment = styled(InnerBase)`
  display: flex;
  justify-content: space-between;
`;

const InnerCategories = styled(InnerBase)`
  display: flex;
  padding: 20px 0;
`;

const Categories = styled.div`
  position: absolute;
  display: flex;
  top: 100%;
  left: 0;
  right: 0;
  background-color: ${colors.white};
  box-shadow: 0px 3px 20px -10px rgba(0, 0, 0, 0.6);
  transition: all 0.2s;
  overflow: hidden;
  max-height: ${({ isOpen }) => (isOpen ? '250px' : '0')};
  min-height: ${({ isOpen }) => (isOpen ? '250px' : '0')};
`;

Wrapper.displayName = 'Categories';

export default {
  Wrapper,
  InnerDepartment,
  InnerCategories,
  Departments,
  Categories,
};
