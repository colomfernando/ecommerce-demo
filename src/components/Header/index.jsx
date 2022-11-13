import React from 'react';
import Styles from './styles';
import Icon from 'components/Icon';
import InputSearch from 'components/InputSearch';
import MiniCart from 'components/MiniCart';
import { useDispatch } from 'react-redux';
import { openMinicartAction } from 'store/minicart';

const Header = () => {
  const dispatch = useDispatch();

  const handleMinicartOnClick = () => dispatch(openMinicartAction());
  return (
    <Styles.Header>
      <Styles.LogoWrapper>
        <Icon name="logoCompany" size={40} />
        <Styles.Name>Company</Styles.Name>
      </Styles.LogoWrapper>
      <InputSearch />
      <Styles.Actions>
        <Styles.ButtonAction baseButton onClick={handleMinicartOnClick}>
          <Icon name="cart" size={28} />
        </Styles.ButtonAction>
        <Styles.ButtonAction baseButton>
          <Icon name="avatar" size={28} />
        </Styles.ButtonAction>
      </Styles.Actions>
      <MiniCart />
    </Styles.Header>
  );
};

export default Header;
