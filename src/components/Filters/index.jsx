import { shape } from 'prop-types';
import React from 'react';
import formatFilters from 'utils/formatFilters';
import Checkbox from 'components/Checkbox';
import useParamsUrl from 'hooks/useParamsUrl';
import LinkRoute from 'components/LinkRoute';
import Styles from './styles';

const MapperComponent = {
  Checkbox: Checkbox,
  Link: LinkRoute,
};

const Filters = ({ filters, ...props }) => {
  if (!filters || !Object.keys(filters).length) return null;
  const params = useParamsUrl();

  const mapperFormat = {
    Checkbox: ({ name, query, ...rest }) => ({
      label: name,
      onChange: (isChecked) => {
        if (!isChecked) return params.remove(query);
        return params.set(query);
      },
      ...rest,
    }),
    Link: ({ name, link }) => ({ children: name, to: link }),
  };

  const filtersApplied = params.get();
  const formattedFilters = formatFilters(filters, filtersApplied);

  const renderFilter = (opt) => {
    const Component = MapperComponent[opt.component];
    if (!Component) return null;

    const formatter = mapperFormat[opt.component];
    if (!formatter) return null;

    return <Component {...formatter(opt)} />;
  };
  return (
    <Styles.Wrapper {...props}>
      {!!formattedFilters.length &&
        formattedFilters.map(({ title, component, options }, idx) => (
          <Styles.Filters key={`${title}-${idx}`}>
            <Styles.TitleFilter>{title}</Styles.TitleFilter>
            {!!options.length &&
              options.map((opt, idx) => (
                <Styles.Filter key={`${opt.value}-${idx}`}>
                  {renderFilter({ ...opt, component })}
                </Styles.Filter>
              ))}
          </Styles.Filters>
        ))}
    </Styles.Wrapper>
  );
};

Filters.propTypes = {
  filters: shape({}),
};

Filters.defaultProps = {
  filters: null,
};

export default Filters;
