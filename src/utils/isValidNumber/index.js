/**
 * It returns true if the input is a number, false otherwise
 * @param {number} num - The number to be validated.
 * @returns {boolean}
 */
const isValidNumber = (num) =>
  !!(
    (num || num === 0) &&
    typeof num === 'number' &&
    !Number.isNaN(Number(num))
  );

export default isValidNumber;
