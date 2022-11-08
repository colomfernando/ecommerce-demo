import React from 'react';
import Header from 'components/Header';
import { arrayOf, node, oneOfType } from 'prop-types';

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

MainLayout.propTypes = {
  children: oneOfType([arrayOf(node), node]).isRequired,
};

export default MainLayout;
