import axios from 'axios';

const instanceDb = axios.create({
  baseURL:
    'https://my-json-server.typicode.com/colomfernando/ecommerce-demo-db',
});

export default instanceDb;
