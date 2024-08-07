import axios from 'axios';

const apiBaseURL = 'https://interview.t-alpha.com.br/api/auth';

export async function register(name: string, taxNumber: string, mail: string, phone: string, password: string) {
  try {
    const response = await axios.post(`${apiBaseURL}/register`, {
      name,
      taxNumber,
      mail,
      phone,
      password
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return response.data;
  } catch (error: any) {
    console.error('Erro ao registrar:', error.response?.data || error.message);
    throw error;
  }
};

export async function login(taxNumber: string, password: string) {
  try {
    const response = await axios.post(`${apiBaseURL}/login`, {
      taxNumber,
      password
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const token = response.data.data.token;
    if (typeof window !== 'undefined') {
      localStorage.setItem('authToken', token);
    };
    return token;
  } catch (error: any) {
    console.error('Erro ao autenticar:', error.response?.data || error.message);
    throw error;
  };
};

export function getToken() {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('authToken');
  };
  return null;
};

export function logout() {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('authToken');
  };
};
