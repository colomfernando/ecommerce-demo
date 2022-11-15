/**
 * If the string is longer than the limit, return the string up to the limit minus 3, plus an ellipsis.
 * Otherwise, return the string.
 * @param str - The string to be truncated.
 * @param [limit=27] - The maximum number of characters to return.
 */
const ellipsisText = (str, limit = 27) => {
  if (str.length <= limit) return str;
  if (str.length <= 3) return str;

  return `${str.slice(0, limit - 3)}...`;
};

export default ellipsisText;
