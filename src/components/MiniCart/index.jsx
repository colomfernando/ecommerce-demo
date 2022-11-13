import React from 'react';
import Drawer from 'components/Drawer';
import { useSelector, useDispatch } from 'react-redux';
import { closeMinicartAction } from 'store/minicart';
import ProductCardSmall from 'components/ProductCardSmall';

const MiniCart = () => {
  const {
    minicart,
    order: { items },
  } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleOnClose = () => dispatch(closeMinicartAction());

  return (
    <Drawer isOpen={minicart.isOpen} onClose={handleOnClose}>
      {items.length
        ? items.map((item, idx) => (
            <ProductCardSmall key={`${item.id}-${idx}`} {...item} />
          ))
        : null}
    </Drawer>
  );
};

export default MiniCart;
