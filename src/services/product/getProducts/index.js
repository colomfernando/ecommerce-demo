import instanceDb from 'services';

const getProducts = async () => {
  try {
    const request = await instanceDb.get('/products');
    const { data } = request;
    return data || [];
  } catch (reason) {
    return reason;
  }
};

export default getProducts;
