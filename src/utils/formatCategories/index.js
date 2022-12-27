const formatData = [];

/**
 * It takes a url and returns a string that represents the type of page the url is for
 * @param url - The url of the page you're on.
 * @returns The type of the url.
 */
const getType = (url) => {
  const splitUrl = url.split('/').filter(Boolean);
  if (splitUrl.length === 1) return 'department';
  if (splitUrl.length === 2) return 'category';
  if (splitUrl.length === 3) return 'subcategory';
  return '';
};

/**
 * It takes a link, splits it into an array, filters out the empty strings, filters out the current
 * item's name, and returns the last item in the array
 * @param item - The current item in the loop
 * @returns The id of the parentData or null
 */
const setParent = (item) => {
  if (!formatData.length) return null;
  const { link } = item;
  const getParent = link
    .split('/')
    .filter(Boolean)
    .filter((value) => value !== item.name.toLowerCase())
    .pop();

  const parentData = formatData.find(
    (item) => item.name.toLowerCase() === getParent
  );
  return parentData?.id || null;
};

/**
 * It takes a nested array of objects and returns a flat array of objects
 * @param data - The data to be formatted.
 * @returns null.
 */
const flatCategory = (data) => {
  if (!data.children || !data.children.length) {
    formatData.push(data);
    return null;
  }

  formatData.push(data);
  for (const item of data.children) {
    flatCategory(item);
  }
};

/**
 * It takes an array of objects, and returns an array of objects with a new property called 'type' and
 * 'parent'
 * @param data - the data that we want to format
 * @returns An array of objects with the following properties:
 *   - id
 *   - name
 *   - link
 *   - type
 *   - parent
 */
const formatCategories = (data) => {
  if (!data) return [];

  for (const item of data) {
    const itemExist = formatData.find((cat) => cat.id === item.id);
    if (itemExist) return null;

    flatCategory(item);
  }

  const dataWithType = formatData.map((item) => ({
    ...item,
    type: getType(item.link),
  }));
  const dataWithParent = dataWithType.map((item) => ({
    ...item,
    parent: setParent(item),
  }));

  return dataWithParent;
};

export default formatCategories;
