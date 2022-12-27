import { shape } from 'prop-types';
import React from 'react';
import formatFilters from 'utils/formatFilters';
import Checkbox from 'components/Checkbox';
import Styles from './styles';

const mapperFormat = {
  Checkbox: ({ name, value }) => ({
    label: name,
    onChange: () => console.log(value),
  }),
};

const MapperComponent = {
  Checkbox: Checkbox,
};

const Filters = ({ filters, ...props }) => {
  if (!filters || !Object.keys(filters).length) return null;

  const formattedFilters = formatFilters(filters);

  const renderFilter = (opt) => {
    const Component = MapperComponent[opt.component];
    if (!Component) return null;

    return <Component {...mapperFormat[opt.component](opt)} />;
  };
  return (
    <Styles.Wrapper {...props}>
      {!!formattedFilters.length &&
        formattedFilters.map(({ title, component, options }, idx) => (
          <Styles.Filters key={`${title}-${idx}`}>
            <Styles.TitleFilter>{title}</Styles.TitleFilter>
            {!!options.length &&
              options.map((opt) => (
                <Styles.Filter key={`${opt.value}`}>
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
