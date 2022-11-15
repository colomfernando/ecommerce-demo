/**
 * @name validateObj
 * @param {object} [obj={}] - object to validate
 * @private
 * @description returns if arg is a valid object
 * @returns boolean
 */
const validateObj = (obj) =>
  !!(obj && obj.constructor === Object && Object.keys(obj).length);

export default validateObj;
