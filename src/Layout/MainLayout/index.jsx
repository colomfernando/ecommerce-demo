import React, { useEffect } from 'react';
import Header from 'components/Header';
import { arrayOf, node, oneOfType } from 'prop-types';
import { useDispatch } from 'react-redux';
import Styles from './styles';
import { saveOrderAction } from 'store/order';

const MainLayout = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(saveOrderAction());
  }, []);
  return (
    <Styles.Wrapper>
      <Header />
      <Styles.Inner>{children}</Styles.Inner>
    </Styles.Wrapper>
  );
};

MainLayout.propTypes = {
  children: oneOfType([arrayOf(node), node]).isRequired,
};

export default MainLayout;
