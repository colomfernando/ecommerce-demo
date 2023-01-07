import mockProducts from '../../../db/products.json';
import matchValueInKey from './matchValueInKey';
import getFilters from './getFilters';
import matchByBrand from './matchByBrand';
import matchByCategories from './matchByCategories';

const searchProducts = async ({ filters }) => {
  try {
    const data = await mockProducts;
    const filtersFromData = await getFilters(data);

    if (!filters || !Object.keys(filters).length)
      return { products: data, filters: filtersFromData };

    const { ft, b, c } = filters;

    const filteredMatchValue = data.filter((prod) =>
      matchValueInKey(prod, ['name', 'description', 'brand'], ft)
    );

    const filteredByCategories = filteredMatchValue.filter((prod) =>
      matchByCategories(prod, c)
    );

    const filtered = filteredByCategories
      .filter((prod) =>
        matchValueInKey(prod, ['name', 'description', 'brand'], ft)
      )
      .filter((prod) => matchByBrand(prod, b));

    const filtersFromFilteredData = await getFilters(filteredByCategories);
    return { products: filtered, filters: filtersFromFilteredData };
  } catch (reason) {
    return reason;
  }
};

export default searchProducts;
