import axios from 'axios';
import { getToken } from '../authenticator';

const api = axios.create({
  baseURL: 'https://interview.t-alpha.com.br/api',
});

api.interceptors.request.use((config) => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});


export async function getProducts() {
  try {
    const response = await api.get('/products/get-all-products');
    return response.data.data.products;
  } catch (error: any) {
    console.error('Erro ao obter produtos:', error.response?.data || error.message);
    throw error;
  }
};

export async function createProduct(product: any) {
  try {
    const response = await api.post('/products/create-product', product);
    return response.data;
  } catch (error: any) {
    console.error('Erro ao criar produto:', error.response?.data || error.message);
    throw error;
  }
};

export async function updateProduct(id: number, updatedProduct: any) {
  const token = getToken();

  const options = {
    method: 'PATCH',
    url: `https://interview.t-alpha.com.br/api/products/update-product/${id}`,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    data: {
      name: `${updatedProduct.name}`,
      description: `${updatedProduct.description}`,
      price: updatedProduct.price,
      stock: updatedProduct.stock
    },
  };

  try {
    const { data } = await axios.request(options);
    console.log("dados da api updated:", data);
  } catch (error) {
    console.error(error);
  };
};

export async function deleteProduct(id: number) {
  const token = getToken();
  const options = {
    method: 'DELETE',
    url: `https://interview.t-alpha.com.br/api/products/delete-product/${id}`,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
  };

  try {
    const { data } = await axios.request(options);
    console.log("EXCLUIR:", data);
  } catch (error) {
    console.error(error);
  }
};

