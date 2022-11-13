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
    return this.save({ ...order, items: [] }, cb);
  }
}

export default OrderItems;
