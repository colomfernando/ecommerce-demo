import mockProducts from '../../../db/products.json';

const getProductById = async (skuId) => {
  try {
    if (!skuId) throw new Error('id is required');
    const data = await mockProducts;
    if (!data || !data.length) return {};

    return data.find((product) => product.skuId === skuId) || {};
  } catch (reason) {
    console.error(reason);
    return {};
  }
};

export default getProductById;
