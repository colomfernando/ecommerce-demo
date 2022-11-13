/**
 * It takes a state object and returns a new state object with the isOpen property set to true
 * @param {{isOpen: boolean}} state - The current state of the reducer.
 */
export const openMinicart = (state) => ({ ...state, isOpen: true });

/**
 * It takes the current state and returns a new state with the isOpen property set to false
 * @param {{isOpen: boolean}} state - The current state of the reducer.
 */
export const closeMinicart = (state) => ({ ...state, isOpen: false });
