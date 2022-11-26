import React from 'react';
import Styles from './styles';
import Icon from 'components/Icon';
import InputSearch from 'components/InputSearch';
import MiniCart from 'components/MiniCart';
import { useDispatch, useSelector } from 'react-redux';
import { openMinicartAction } from 'store/minicart';
import getCategories from 'services/categories/getCategories';
import { useQuery } from 'react-query';
import Navigation from 'components/Navigation';

const Header = () => {
  const { items } = useSelector((state) => state.order);
  const dispatch = useDispatch();
  const { data } = useQuery({
    queryKey: 'categories',
    queryFn: getCategories,
  });

  const handleMinicartOnClick = () => dispatch(openMinicartAction());
  console.log('items :>> ', items);
  return (
    <Styles.Header>
      <Styles.InnerHeader>
        <Styles.LogoWrapper>
          <Icon name="logoCompany" size={40} />
          <Styles.Name>Company</Styles.Name>
        </Styles.LogoWrapper>
        <InputSearch />
        <Styles.Actions>
          <Styles.ButtonActionCart baseButton onClick={handleMinicartOnClick}>
            {!!items.length && (
              <Styles.ItemsQty>{items.length}</Styles.ItemsQty>
            )}
            <Icon name="cart" size={32} />
          </Styles.ButtonActionCart>
          <Styles.ButtonAction baseButton>
            <Icon name="avatar" size={32} />
          </Styles.ButtonAction>
        </Styles.Actions>
        <MiniCart />
      </Styles.InnerHeader>
      <Navigation categories={data} />
    </Styles.Header>
  );
};

export default Header;
