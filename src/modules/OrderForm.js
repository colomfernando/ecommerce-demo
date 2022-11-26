class OrderForm {
  constructor() {
    this.KEY_CACHE = 'orderForm';
    this.DEFAULT_DATA = {
      items: [],
      totals: {
        items: 0,
      },
    };
  }

  /**
   * It creates a new cache in localStorage with the default data
   * @returns The return value of localStorage.setItem() is undefined.
   */
  create() {
    return localStorage.setItem(
      this.KEY_CACHE,
      JSON.stringify(this.DEFAULT_DATA)
    );
  }

  /**
   * It returns the value of the localStorage item with the key of this.KEY_CACHE
   * @returns The value of the key 'KEY_CACHE' in localStorage.
   */
  get _getFromCache() {
    return JSON.parse(localStorage.getItem(this.KEY_CACHE));
  }

  /**
   * It returns the value of the _getFromCache property. If the _getFromCache property is undefined, it
   * calls the create() method and then returns the value of the _getFromCache property.
   * @returns The getter method is returning the value of the _getFromCache property.
   */
  get getOrder() {
    const isOrderCache = this._getFromCache;
    if (isOrderCache) return isOrderCache;
    this.create();
    return this._getFromCache;
  }

  /**
   * It saves the order to local storage
   * @param order - The order object to save.
   * @param cb - callback function
   * @returns The order object is being returned.
   */
  saveOrder(order, cb) {
    localStorage.setItem(this.KEY_CACHE, JSON.stringify(order));
    if (cb) return cb(order);
  }

  /**
   * It deletes the cache
   * @returns The value of the key in localStorage.
   */
  delete() {
    return localStorage.removeItem(this.KEY_CACHE);
  }
}

export default OrderForm;
