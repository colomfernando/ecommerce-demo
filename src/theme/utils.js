import colors from './colors';

const setColorByProp = (color = 'primary') => {
  switch (color) {
    case 'primary':
    case 'secondary':
      return colors[color].main;
    case 'black':
    case 'white':
      return colors.common[color];
    case 'error':
      return colors.error.main;
    case 'success':
      return colors.success.main;
    default:
      return '#000';
  }
};

const setColor = (variant = 'primary', color = 'main') => {
  const colorVariant = colors[variant];
  if (!colorVariant) {
    // eslint-disable-next-line no-console
    console.warn('colorVariant is undefined');
    return '#000';
  }
  const selectedColor = colorVariant[color];
  if (!selectedColor) {
    // eslint-disable-next-line no-console
    console.warn('selectedColor is undefined');
    return '#000';
  }
  return selectedColor;
};

const setTextColorByProp = (color = 'primary') => {
  switch (color) {
    case 'primary':
    case 'secondary':
      return colors[color].text;
    case 'black':
      return colors.common.white;
    case 'white':
      return colors.common.black;
    case 'error':
      return colors.common.white;
    case 'success':
      return colors.common.white;
    default:
      return '#000';
  }
};

export { setColor, setColorByProp, setTextColorByProp };
