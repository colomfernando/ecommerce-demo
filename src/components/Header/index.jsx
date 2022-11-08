import React from 'react';
import Styles from './styles';
import Icon from 'components/Icon';

const Header = () => {
  return (
    <Styles.Header>
      header
      <Styles.Actions>
        <Icon name="cart" size={32} />
        <Icon name="avatar" size={32} />
      </Styles.Actions>
    </Styles.Header>
  );
};

export default Header;
