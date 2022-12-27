import React, { useState, useEffect } from 'react';
import Styles from './styles';
import Icon from 'components/Icon';
import InputSearch from 'components/InputSearch';
import MiniCart from 'components/MiniCart';
import { useDispatch, useSelector } from 'react-redux';
import { openMinicartAction } from 'store/minicart';
import getCategories from 'services/categories/getCategories';
import Navigation from 'components/Navigation';
import useWindowSize from 'hooks/useWindowSize';
import getTotalItems from 'utils/getTotalItems';
import LinkRoute from 'components/LinkRoute';
import InputSearchMobile from 'components/InputSearchMobile';

// TODO: mi cuenta

const Header = () => {
  const { items } = useSelector((state) => state.order);
  const responsive = useWindowSize();
  const [categories, setCategories] = useState([]);
  const [isSearchMobileOpen, setIsSearchMobileOpen] = useState(false);

  const dispatch = useDispatch();

  const handleMinicartOnClick = () => dispatch(openMinicartAction());

  const getAndSetCategories = async () => {
    const cats = await getCategories();
    setCategories(cats);
  };

  useEffect(() => {
    getAndSetCategories();
  }, []);
  const totalItems = getTotalItems(items);
  return (
    <Styles.Header>
      <Styles.InnerHeader>
        <LinkRoute to="/">
          <Styles.LogoWrapper>
            <Icon name="logoCompany" size={40} />
            <Styles.Name>Company</Styles.Name>
          </Styles.LogoWrapper>
        </LinkRoute>
        {responsive.md && <InputSearch />}
        {responsive.onlySm && (
          <Styles.ButtonActionMobileSearch
            baseButton
            onClick={() => setIsSearchMobileOpen(!isSearchMobileOpen)}
          >
            <Icon name="search" size={28} />
          </Styles.ButtonActionMobileSearch>
        )}
        <Styles.Actions>
          <Styles.ButtonActionCart baseButton onClick={handleMinicartOnClick}>
            {!!items.length && <Styles.ItemsQty>{totalItems}</Styles.ItemsQty>}
            <Icon name="cart" size={28} />
          </Styles.ButtonActionCart>
          <Styles.ButtonAction baseButton>
            <Icon name="avatar" size={28} />
          </Styles.ButtonAction>
        </Styles.Actions>
        <MiniCart />
      </Styles.InnerHeader>
      {responsive.lg && <Navigation categories={categories} />}
      {responsive.onlySm && <InputSearchMobile isOpen={isSearchMobileOpen} />}
    </Styles.Header>
  );
};

export default Header;
