import validateObj from 'utils/isValidObject';

/**
 * It returns an array of images from a product object
 * @param product - The product object
 * @returns An array of images
 */
const getImagesProduct = (product) => {
  if (!product || !validateObj(product)) return [];

  const { skuId, skus } = product;

  const skuFiltered = skus.find((skuItem) => skuItem.skuId === skuId);

  if (!skuFiltered) return [];
  return skuFiltered.images || [];
};

export default getImagesProduct;
