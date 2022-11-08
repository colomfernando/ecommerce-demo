import React, { lazy, Suspense } from 'react';
import { string, number } from 'prop-types';
import ErrorBoundary from 'components/ErrorBoundary';

/**
 * It returns a lazy-loaded SVG component
 * @returns A React component that is lazy loaded.
 */
const Icon = ({ name, size = 32, ...props }) => {
  if (!name) return null;

  const capitalizeName = name.charAt(0).toUpperCase() + name.slice(1);

  const IconComp = lazy(() => import(`./svgs/Icon${capitalizeName}`));

  return (
    <ErrorBoundary>
      <Suspense>
        <IconComp width={size} height={size} {...props} />
      </Suspense>
    </ErrorBoundary>
  );
};

Icon.propTypes = {
  name: string.isRequired,
  size: number,
};

Icon.defaultProps = {
  size: 32,
};

export default Icon;
