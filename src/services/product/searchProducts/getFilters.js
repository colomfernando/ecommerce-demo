const deleteDuplicates = (array, key) => {
  return array.reduce((acc, act) => {
    const original = acc.find(
      (originalBrand) => originalBrand[key] === act[key]
    );

    if (!original) return [...acc, act];
    return acc;
  }, []);
};

const getFilters = (products) => {
  if (!products || !products.length) return {};
  const brands = products.map((product) => ({
    brand: product.brand,
    id: product.brandId,
  }));

  return { brands: deleteDuplicates(brands, 'id') };
};

export default getFilters;
