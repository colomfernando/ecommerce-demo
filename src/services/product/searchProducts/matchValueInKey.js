/**
 * If the product has a key that matches the value, return true.
 * @param product - the product object to search
 * @param keysToSearch - an array of keys to search in the product object
 * @param value - the value to search for
 * @returns A function that takes in a product, keysToSearch, and a value. It returns true if the
 * product has a key that matches the value.
 */
const matchValueInKey = (product, keysToSearch, values) => {
  if (!product || !Object.keys(product).length) return false;
  if (!keysToSearch || !keysToSearch.length) return false;
  if (!values || !values.length) return true;

  return keysToSearch.some(
    (key) =>
      !!product[key] &&
      values.some((ft) => product[key].toLowerCase().includes(ft))
  );
};

export default matchValueInKey;
