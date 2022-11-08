export const breakpointsValues = {
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920,
};

const getMin = (key) =>
  `@media screen and (min-width: ${breakpointsValues[key]}px)`;

const breakpoints = {
  sm: getMin('sm'),
  md: getMin('md'),
  lg: getMin('lg'),
  xl: getMin('xl'),
};

export default breakpoints;
