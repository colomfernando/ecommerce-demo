/**
 * "Given a list of categories and a parent id, return the children of that parent."
 *
 * The function takes two arguments:
 *
 * data: an array of categories
 * id: the id of the parent category
 * The function returns an array of categories
 * @param data - The array of categories
 * @param id - The id of the parent category
 * @returns An array of categories that are children of the category with the given id.
 */
const getCategoriesByParentId = (data, id) => {
  if (!data || !id) return [];

  const { children } = data.find((cat) => cat.id === id) || {};

  return children || [];
};

export default getCategoriesByParentId;
