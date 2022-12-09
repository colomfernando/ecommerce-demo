import mockProducts from '../../../db/products.json';
import matchValueInKey from './matchValueInKey';
import getFilters from './getFilters';
import matchByBrand from './matchByBrand';

const searchProducts = async ({ filters }) => {
  try {
    const data = await mockProducts;
    if (!filters || !Object.keys(filters).length)
      return { products: data, filters: getFilters(data) };

    const { ft, b } = filters;
    const filtered = data.filter((prod) => {
      return (
        matchValueInKey(prod, ['name', 'description', 'brand'], ft) &&
        matchByBrand(prod, b)
      );
    });

    return { products: filtered, filters: getFilters(filtered) };
  } catch (reason) {
    return reason;
  }
};

export default searchProducts;
