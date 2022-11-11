import React from 'react';
import Styles from './styles';
import Icon from 'components/Icon';
import InputSearch from 'components/InputSearch';

const Header = () => {
  return (
    <Styles.Header>
      <Styles.LogoWrapper>
        <Icon name="logoCompany" size={40} />
        <Styles.Name>Company</Styles.Name>
      </Styles.LogoWrapper>
      <InputSearch />
      <Styles.Actions>
        <Styles.ButtonAction baseButton>
          <Icon name="cart" size={28} />
        </Styles.ButtonAction>
        <Styles.ButtonAction baseButton>
          <Icon name="avatar" size={28} />
        </Styles.ButtonAction>
      </Styles.Actions>
    </Styles.Header>
  );
};

export default Header;
