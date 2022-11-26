import { useState, useEffect } from 'react';
import OrderItems from 'modules/OrderItems';
import { saveOrderAction } from 'store/order';
import { useDispatch, useSelector } from 'react-redux';

const itemsOrder = new OrderItems();

const useCart = (skuId) => {
  if (!skuId) return null;
  const {
    order: { items },
  } = useSelector((state) => state);

  const dispatch = useDispatch();
  const cb = () => dispatch(saveOrderAction());

  const item = items.find((item) => item.skuId === skuId);

  const defaultData = {
    ...item,
    isItemInOrder: false,
    addItem: (item, qty) => itemsOrder.addItem(item, qty, cb),
    updateItem: (skuId, qty) => itemsOrder.updateItem(skuId, qty, cb),
    removeItem: (skuId) => itemsOrder.removeById(skuId, cb),
  };
  const [itemData, setItemData] = useState(defaultData);

  const setData = () => {
    setItemData({ ...defaultData, ...item, isItemInOrder: !!item });
  };

  useEffect(() => {
    setData();
  }, [item]);

  return itemData;
};

export default useCart;
