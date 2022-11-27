import React from 'react';
import Styles from './styles';
import MainLayout from 'Layout/MainLayout';

const NotFound = () => {
  return (
    <MainLayout>
      <Styles.Wrapper>
        <Styles.IconNotFound name="404" size={120} />
        <Styles.Message>
          We could not find what you are looking for
        </Styles.Message>
      </Styles.Wrapper>
    </MainLayout>
  );
};

export default NotFound;
