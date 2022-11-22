import { useState, useEffect } from 'react';
import OrderItems from 'modules/OrderItems';

const items = new OrderItems();

const useAddToCart = (skuId) => {
  if (!skuId) return null;
  const [itemData, setItemData] = useState({});

  useEffect(() => {
    setItemData(items.getItemBySkuId(skuId));
  }, []);
  return itemData;
};

export default useAddToCart;
