import mockProducts from '../../../db/products.json';
import matchValueInKey from './matchValueInKey';

const searchProducts = async ({ filters }) => {
  try {
    const { ft } = filters;
    const data = await mockProducts;

    const filtered = data.filter((prod) => {
      return matchValueInKey(prod, ['name', 'description', 'brand'], ft);
    });

    return filtered;
  } catch (reason) {
    return reason;
  }
};

export default searchProducts;
