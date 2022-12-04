/**
 * It takes an array of objects, and returns the sum of the qty property of each object
 * @param items - The array of items in the cart.
 * @returns The total number of items in the cart.
 */
const getTotalItems = (items) => {
  if (!items) return null;
  return items.reduce((acc, act) => acc + act.qty, 0);
};

export default getTotalItems;
