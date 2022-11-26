const options = { style: 'currency', currency: 'USD' };
const formatPrice = new Intl.NumberFormat('en-US', options);

export default formatPrice;
