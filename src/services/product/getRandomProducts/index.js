import getProducts from '../getProducts';
const randomNumber = (limit) => Math.floor(Math.random() * (limit + 1));

const getRandomProducts = async (limit = 15) => {
  try {
    const products = await getProducts();
    const randomIdx = Array.from({ length: limit }, () =>
      randomNumber(products.length)
    );

    return products.filter((_, idx) => randomIdx.includes(idx));
  } catch (reason) {
    console.error(reason);
    return [];
  }
};

export default getRandomProducts;
