import Checkbox from 'components/Checkbox';
import { shape } from 'prop-types';
import React, { useEffect } from 'react';
import formatFilters from 'utils/formatFilters';
import Styles from './styles';

const Filters = ({ filters, ...props }) => {
  if (!filters || !Object.keys(filters).length) return null;

  const formattedFilters = formatFilters(filters);
  console.log('formattedFilters :>> ', formattedFilters);
  useEffect(() => {}, []);

  return (
    <Styles.Wrapper {...props}>
      {!!formattedFilters.length &&
        formattedFilters.map(({ title, options }, idx) => (
          <div key={`${title}-${idx}`}>
            <p>{title}</p>
            {!!options.length &&
              options.map((opt) => (
                <Checkbox
                  key={opt.name}
                  label={opt.name}
                  onChange={(arg) => console.log({ arg, opt: opt.value })}
                />
              ))}
          </div>
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
