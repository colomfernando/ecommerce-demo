/**
 * If the product is not null, and the brands array is either null or empty, return true. Otherwise,
 * return whether the product's brandId is included in the brands array.
 * @param product - the product object we're checking
 * @param brands - an array of brandIds
 * @returns A function that takes in a product and brands and returns a boolean.
 */
const matchByBrand = (product, brands) => {
  if (!product) return false;
  if (!brands || !brands.length) return true;

  return brands.includes(product.brandId);
};

export default matchByBrand;
