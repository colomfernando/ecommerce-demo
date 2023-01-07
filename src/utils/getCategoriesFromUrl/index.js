import getCategories from 'services/categories/getCategories';

const getCategoriesFromUrl = async (params) => {
  if (!params || !params.length) return null;

  const paramsSlice = params.slice(0, 3);
  const categoriesData = await getCategories();

  const categoriesFromUrl = paramsSlice
    .map((name, idx) => {
      if (idx === 0)
        return categoriesData.find(
          (cat) => cat.value.toLowerCase() === name.toLowerCase()
        );

      const linkToMatch = params.slice(0, idx + 1).join('/');

      return categoriesData.find((cat) => cat.link === `/${linkToMatch}`);
    })
    .filter(Boolean);

  if (categoriesFromUrl.length < paramsSlice.length) return [];

  if (categoriesFromUrl.length === 1) return categoriesFromUrl;

  return categoriesFromUrl;
};

export default getCategoriesFromUrl;
