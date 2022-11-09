import React from 'react';
import Styles from './styles';
import Icon from 'components/Icon';

const Header = () => {
  return (
    <Styles.Header>
      header
      <Styles.Actions>
        <Icon name="cart" size={28} />
        <Icon name="avatar" size={28} />
      </Styles.Actions>
    </Styles.Header>
  );
};

export default Header;
