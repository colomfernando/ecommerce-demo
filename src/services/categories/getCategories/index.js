import mock from 'db/categories.json';
import formatCategories from 'utils/formatCategories';

const getCategories = async () => {
  try {
    const categoriesCache = localStorage.getItem('categories');
    if (categoriesCache && categoriesCache.length)
      return JSON.parse(categoriesCache);

    const formatData = formatCategories(mock);
    localStorage.setItem('categories', JSON.stringify(formatData));

    return formatData || [];
  } catch (reason) {
    return reason;
  }
};

export default getCategories;
