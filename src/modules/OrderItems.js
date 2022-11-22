import OrderForm from './OrderForm';

class OrderItems extends OrderForm {
  /**
   * It returns the items of the order.
   * @returns The items of the order.
   */
  get getItems() {
    const order = this.getOrder;
    return order.items;
  }

  /**
   * If the id is not defined, return an empty object, otherwise return the item from the order that
   * matches the id.
   * @param id - The id of the item you want to get.
   * @returns The item with the matching id.
   */
  getItemBySkuId(skuId) {
    if (!skuId) return {};
    const order = this.getOrder;
    return order.items.find((item) => item.skuId === skuId);
  }

  /**
   * It removes an item from the order
   * @param id - The id of the item to be removed.
   * @param cb - callback function
   * @returns The order object with the itemsFiltered array.
   */
  removeById(id, cb) {
    const order = this.getOrder;
    const { items } = order;

    const itemsFiltered = items.filter((item) => item.id !== id);
    return this.saveOrder({ ...order, items: itemsFiltered }, cb);
  }
  /**
   * It deletes all items from the order
   * @param cb - callback function
   * @returns The order object with the items array set to an empty array.
   */
  removeAll(cb) {
    const order = this.getOrder;
    return this.saveOrder({ ...order, items: [] }, cb);
  }
}

export default OrderItems;
