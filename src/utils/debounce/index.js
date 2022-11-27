/**
 * @name debounce
 * @param {function} callback
 * @param {number} wait
 * @example debounce(() => {console.log('test')}, 300)
 */
function debounce(callback, wait = 100) {
  let timeout;
  return (...args) => {
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => callback.apply(context, args), wait);
  };
}

export default debounce;
