import mockProducts from '../../../db/products.json';

const getProducts = async () => {
  try {
    const data = await mockProducts;
    return data || [];
  } catch (reason) {
    return reason;
  }
};

export default getProducts;
