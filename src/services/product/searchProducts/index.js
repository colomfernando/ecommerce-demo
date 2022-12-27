import mockProducts from '../../../db/products.json';
import matchValueInKey from './matchValueInKey';
import getFilters from './getFilters';
import matchByBrand from './matchByBrand';

const searchProducts = async ({ filters }) => {
  try {
    const data = await mockProducts;
    const filtersFromData = await getFilters(data);
    if (!filters || !Object.keys(filters).length)
      return { products: data, filters: filtersFromData };

    const { ft, b } = filters;

    const filtered = data
      .filter((prod) =>
        matchValueInKey(prod, ['name', 'description', 'brand'], ft)
      )
      .filter((prod) => matchByBrand(prod, b));

    const filtersFromFilteredData = await getFilters(data);
    return { products: filtered, filters: filtersFromFilteredData };
  } catch (reason) {
    return reason;
  }
};

export default searchProducts;
