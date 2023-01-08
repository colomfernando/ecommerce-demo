import getCategories from 'services/categories/getCategories';

/**
 * It takes an array and a key, and returns a new array with only the unique values of the key
 * @param array - the array of objects to be filtered
 * @param key - The key of the object that you want to compare.
 * @returns an array of objects that have unique values for the key passed in.
 */
const deleteDuplicates = (array, key) => {
  return array.reduce((acc, act) => {
    const original = acc.find(
      (originalBrand) => originalBrand[key] === act[key]
    );

    if (!original) return [...acc, act];
    return acc;
  }, []);
};

/**
 * Get all the brands from a list of products.
 * @param products - An array of products
 * @returns An array of objects with the name and id of the brand.
 */
const getBrands = (products) => {
  if (!products || !products.length) return [];

  return products.map((product) => {
    return { name: product.brand, id: product.brandId };
  });
};

/**
 * It takes an array of products and returns an array of unique categories
 * @param products - The array of products to get the categories from.
 * @returns An array of unique categories from the products array.
 */
const getCategoriesFromProducts = (products) => {
  if (!products || !products.length) return [];

  return [
    ...new Set(products.reduce((acc, act) => [...acc, ...act.categories], [])),
  ];
};

/**
 * It takes an array of products and returns an object with the brands and categories of those products
 * @param products - An array of products.
 * @returns An object with two properties: brands and categories.
 */
const getFilters = async (products) => {
  if (!products || !products.length) return {};

  const productsCategories = getCategoriesFromProducts(products);
  const categoriesData = await getCategories();

  const categoriesProductData = productsCategories.map((catId) =>
    categoriesData.find((cat) => cat.id === catId)
  );

  return {
    categories: categoriesProductData,
    brands: deleteDuplicates(getBrands(products), 'id'),
  };
};

export default getFilters;
