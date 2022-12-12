const mapperFilters = {
  brands: (brands) =>
    brands.map((brand) => ({ value: `b=${brand.id}`, name: brand.name })),
};

const formatFilters = (filters) => {
  if (!filters || !Object.keys(filters).length) return [];

  const keys = Object.keys(filters);

  const formattedFilters = keys.reduce((acc, act) => {
    if (!filters[act]) return acc;

    const mapperFormat = mapperFilters[act];
    if (!mapperFormat) return acc;

    return [...acc, { title: act, options: mapperFormat(filters[act]) }];
  }, []);

  return formattedFilters;
};

export default formatFilters;
