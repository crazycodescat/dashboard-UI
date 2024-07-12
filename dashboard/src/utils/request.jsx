import axios from 'axios';

async function getRequest(path, method, params) {
  const config = {
    url: `${import.meta.env.VITE_BASE_URL}${path}`,
    method: method,
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`,
      'Content-Type': 'application/json',
      accept: 'application/json',
    },
    params: params,
  };

  try {
    const data = await axios.request(config);
    return data.data;
  } catch (error) {
    console.error(error);
  }
}

export { getRequest };
