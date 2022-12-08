/**
 * If the product has a key that matches the value, return true.
 * @param product - the product object to search
 * @param keysToSearch - an array of keys to search in the product object
 * @param value - the value to search for
 * @returns A function that takes in a product, keysToSearch, and a value. It returns true if the
 * product has a key that matches the value.
 */
const matchValueInKey = (product, keysToSearch, value) => {
  if (!product || !Object.keys(product).length) return false;
  if (!keysToSearch || !keysToSearch.length) return false;
  if (!value) return false;

  return keysToSearch.some(
    (key) => !!product[key] && product[key].toLowerCase().includes(value)
  );
};

export default matchValueInKey;
