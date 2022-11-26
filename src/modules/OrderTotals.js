import OrderForm from './OrderForm';

class OrderTotals extends OrderForm {
  /**
   * It returns the items of the order.
   * @returns The items property of the getOrder object.
   */
  get _getItems() {
    return this.getOrder.items;
  }

  /**
   * It returns the best price if it exists, otherwise it returns the list price
   * @param item - The item object that is being rendered.
   * @returns The bestPrice or listPrice of the item.
   */
  getPrice(item) {
    if (!item) return null;
    const { listPrice, bestPrice } = item;
    return bestPrice || listPrice;
  }

  /**
   * It takes the items array, and for each item, it adds the price of the item to the accumulator
   * @returns The total price of all items in the cart.
   */
  get getItemsTotals() {
    const items = this._getItems;
    const itemTotals = items.reduce(
      (acc, act) => acc + this.getPrice(act) * act.qty,
      0
    );
    return itemTotals;
  }

  /**
   * It returns the totals of the order.
   * @returns The totals object is being returned.
   */
  get totals() {
    return { ...this.getOrder.totals, items: this.getItemsTotals };
  }
}

export default OrderTotals;
