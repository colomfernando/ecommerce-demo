import React from 'react';
import Drawer from 'components/Drawer';
import { useSelector, useDispatch } from 'react-redux';
import { closeMinicartAction } from 'store/minicart';
import ProductCardSmall from 'components/ProductCardSmall';
import OrderItems from 'modules/OrderItems';
import Styles from './styles';
import { saveOrderAction } from 'store/order';

const MiniCart = () => {
  const {
    minicart,
    order: { items },
  } = useSelector((state) => state);
  const dispatch = useDispatch();

  const itemsActions = new OrderItems();

  const handleRemoveAll = () => {
    itemsActions.removeAll(() => dispatch(saveOrderAction()));
  };
  const handleOnClose = () => dispatch(closeMinicartAction());

  const hasItems = items && items.length;

  return (
    <Drawer isOpen={minicart.isOpen} onClose={handleOnClose}>
      <Styles.Wrapper>
        <Styles.Header>
          <Styles.CloseButton baseButton onClick={handleOnClose}>
            <Styles.IconClose size={20} name="back" />
          </Styles.CloseButton>
          <Styles.Title>Your Cart</Styles.Title>
          <Styles.TrashButton baseButton onClick={handleRemoveAll}>
            <Styles.IconTrash size={20} name="trash" />
          </Styles.TrashButton>
        </Styles.Header>
        {hasItems ? (
          <Styles.ProductList>
            {[
              ...items,
              ...items,
              ...items,
              ...items,
              ...items,
              ...items,
              ...items,
              ...items,
              ...items,
              ...items,
              ...items,
              ...items,
            ].map((item, idx) => (
              <Styles.Product key={`${item.id}-${idx}`}>
                {' '}
                <ProductCardSmall {...item} />
              </Styles.Product>
            ))}
          </Styles.ProductList>
        ) : (
          <p>carrito vacio</p>
        )}
        {hasItems && (
          <Styles.Resume>
            <Styles.FinishBuy>Checkout</Styles.FinishBuy>
          </Styles.Resume>
        )}
      </Styles.Wrapper>
    </Drawer>
  );
};

export default MiniCart;
