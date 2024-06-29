/* eslint-disable no-unused-vars */
import axios from 'axios';
import { useState } from 'react';

const useFetch = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const fetch = async (config) => {
    try {
      const res = await axios.request(config);
      if (res.status === 200) {
        return res.data;
      }
    } catch (error) {
      console.log(error);
    }
  };
  return { fetch };
};

export default useFetch;
