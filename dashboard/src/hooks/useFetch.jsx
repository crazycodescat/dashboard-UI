/* eslint-disable no-unused-vars */
import axios from 'axios';
import { useState, useMemo } from 'react';

const useFetch = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // Memoize the fetch function
  const fetch = useMemo(
    () => async (path, method, params) => {
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
        setLoading(true);
        const res = await axios.request(config);
        console.log(res);
        setLoading(false);
        return res.data;
      } catch (error) {
        console.log(error.message);
        setError(error);
      }
    },
    []
  ); // Empty dependency array means it will only create the function once

  return { fetch, loading, error };
};

export default useFetch;
