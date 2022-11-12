import React from 'react';
import Header from 'components/Header';
import { arrayOf, node, oneOfType } from 'prop-types';
import Styles from './styles';

const MainLayout = ({ children }) => {
  return (
    <Styles.Wrapper>
      <Header />
      {children}
    </Styles.Wrapper>
  );
};

MainLayout.propTypes = {
  children: oneOfType([arrayOf(node), node]).isRequired,
};

export default MainLayout;
