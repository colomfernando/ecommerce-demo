import { useState, useEffect, useCallback } from 'react';
import debounce from 'utils/debounce';
import { breakpointsValues } from 'theme/breakpoints';

const actualSize = () => window.innerWidth;

// sm: 600,
// md: 960,
// lg: 1280,
// xl: 1920

/**
 * @name useWindowSize
 * @returns object
 */
const useWindowSize = () => {
  const [size, setSize] = useState(null);
  const [breakpoints, setBreakpoints] = useState({
    sm: false,
    md: false,
    lg: false,
    xl: false,
    onlySm: false,
    onlyMd: false,
    onlyLg: false,
    onlyXl: false,
  });

  const handleSize = () => setSize(actualSize());

  const handleBreakpoints = () =>
    setBreakpoints({
      sm: actualSize() >= breakpointsValues.sm,
      md: actualSize() >= breakpointsValues.md,
      lg: actualSize() >= breakpointsValues.lg,
      xl: actualSize() >= breakpointsValues.xl,
      onlySm: actualSize() < breakpointsValues.md,
      onlyMd:
        actualSize() >= breakpointsValues.md &&
        actualSize() < breakpointsValues.lg,
      onlyLg:
        actualSize() >= breakpointsValues.lg &&
        actualSize() < breakpointsValues.xl,
      onlyXl: actualSize() >= breakpointsValues.xl,
    });

  const debounceResize = useCallback(
    debounce(() => {
      handleSize();
      handleBreakpoints();
    }, 300),
    []
  );

  useEffect(() => {
    handleSize();
    handleBreakpoints();

    window.addEventListener('resize', () => debounceResize());
    return window.removeEventListener('resize', () => debounceResize());
  }, []);
  return { size, ...breakpoints };
};

export default useWindowSize;
