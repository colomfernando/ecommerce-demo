import instanceDb from 'services';

const getProductById = async (id) => {
  try {
    if (!id) throw new Error('id is required');
    const request = await instanceDb.get(`/products/${String(id)}}`);
    const { data } = request;

    return data || {};
  } catch (reason) {
    return reason;
  }
};

export default getProductById;
