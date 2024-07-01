// /* eslint-disable no-unused-vars */
// import axios from 'axios';
// import { useState } from 'react';

// const useFetch = () => {
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const fetch = async (config) => {
//     try {
//       const res = await axios.request(config);
//       if (res.status === 200) {
//         return res.data;
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   return { fetch };
// };

// export default useFetch;

/* eslint-disable no-unused-vars */
import axios from 'axios';
import { useState, useMemo } from 'react';

const useFetch = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // Memoize the fetch function
  const fetch = useMemo(
    () => async (config) => {
      try {
        const res = await axios.request(config);
        if (res.status === 200) {
          return res.data;
        }
      } catch (error) {
        console.log(error);
        setError(error);
      }
    },
    []
  ); // Empty dependency array means it will only create the function once

  return { fetch, loading, error };
};

export default useFetch;
