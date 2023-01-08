const mapperFilters = {
  brands: (brands) =>
    brands.map((brand) => ({
      value: brand.id,
      query: { b: brand.id },
      name: brand.name,
      ...brand,
    })),
  categories: (categories) =>
    categories.map((cat) => ({
      link: cat.link,
      name: cat.value,
    })),
};

const mapperQuery = {
  brands: 'b',
  categories: 'c',
};

const mapperComponent = {
  brands: 'Checkbox',
  categories: 'Link',
};

const formatFilters = (filters, filtersApplied) => {
  if (!filters || !Object.keys(filters).length) return [];

  const keys = Object.keys(filters);

  const formattedFilters = keys.reduce((acc, act) => {
    const actualFilter = filters[act];
    if (!actualFilter) return acc;

    const mapperFormat = mapperFilters[act];
    if (!mapperFormat) return acc;

    const appliedFilters = filtersApplied[mapperQuery[act]] || [];

    const mergeFilterWithApplied = actualFilter.map((filter) => ({
      ...filter,
      isSelected: appliedFilters.some((id) => filter.id === id),
    }));

    return [
      ...acc,
      {
        title: act,
        component: mapperComponent[act],
        options: mapperFormat(mergeFilterWithApplied),
      },
    ];
  }, []);

  return formattedFilters;
};

export default formatFilters;
