/**
 * If there is no data, return an empty array. Otherwise, filter the data to only include categories
 * that have a type of department.
 * @param data - The data that we're filtering through.
 * @returns An array of objects that have a type of department.
 */
const getDepartments = (data) => {
  if (!data) return [];

  return data.filter((cat) => cat.type === 'department');
};

export default getDepartments;
