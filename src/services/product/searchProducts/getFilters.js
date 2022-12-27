import getCategories from 'services/categories/getCategories';

const deleteDuplicates = (array, key) => {
  return array.reduce((acc, act) => {
    const original = acc.find(
      (originalBrand) => originalBrand[key] === act[key]
    );

    if (!original) return [...acc, act];
    return acc;
  }, []);
};

const getFilters = async (products) => {
  if (!products || !products.length) return {};
  let categories = [];
  const brands = products.map((product) => {
    categories.push(...product.categories);
    return { name: product.brand, id: product.brandId };
  });

  const categoriesData = await getCategories();

  const uniquesCategories = [...new Set(categories)];

  const categoriesWithData = uniquesCategories.map((catId) =>
    categoriesData.find((cat) => cat.id === catId)
  );

  return {
    brands: deleteDuplicates(brands, 'id'),
    categories: categoriesWithData,
  };
};

export default getFilters;
