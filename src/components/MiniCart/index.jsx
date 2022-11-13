import React from 'react';
import Drawer from 'components/Drawer';
import { useSelector, useDispatch } from 'react-redux';
import { closeMinicartAction } from 'store/minicart';

const MiniCart = () => {
  const { minicart } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleOnClose = () => dispatch(closeMinicartAction());

  return (
    <Drawer isOpen={minicart.isOpen} onClose={handleOnClose}>
      <div>drawer</div>
    </Drawer>
  );
};

export default MiniCart;
