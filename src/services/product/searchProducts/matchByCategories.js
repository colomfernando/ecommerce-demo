const matchByCategories = (prod, categories) => {
  if (!prod | !prod.categories) return false;
  if (!categories || !categories.length) return true;

  const isInCategories = categories.every((catId) =>
    prod.categories.includes(catId)
  );
  return isInCategories;
};

export default matchByCategories;
