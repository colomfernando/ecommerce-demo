import React from 'react';
import Drawer from 'components/Drawer';
import { useSelector, useDispatch } from 'react-redux';
import { closeMinicartAction } from 'store/minicart';
import ProductCardSmall from 'components/ProductCardSmall';
import Styles from './styles';

const MiniCart = () => {
  const {
    minicart,
    order: { items },
  } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleOnClose = () => dispatch(closeMinicartAction());

  return (
    <Drawer isOpen={minicart.isOpen} onClose={handleOnClose}>
      <Styles.Wrapper>
        <Styles.Header>
          <Styles.Title>Cart</Styles.Title>
          <Styles.TrashButton baseButton>
            <Styles.IconTrash size={20} name="trash" />
          </Styles.TrashButton>
        </Styles.Header>
        {!!items && items.length ? (
          items.map((item, idx) => (
            <ProductCardSmall key={`${item.id}-${idx}`} {...item} />
          ))
        ) : (
          <p>carrito vacio</p>
        )}
      </Styles.Wrapper>
    </Drawer>
  );
};

export default MiniCart;
