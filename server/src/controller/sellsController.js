import axios from 'axios';
import sellsData from '../../sellsData.js';

const sells = async (req, res) => {
  const config = {
    url: `${process.env.BASE_URL}/sell`,
    method: 'get',
    headers: {
      Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
      'Content-Type': 'application/json',
      accept: 'application/json',
    },
    params: {
      per_page: 4000,
    },
  };

  const sellsData = await axios.request(config);
  console.log(sellsData);
  const sellsData = [...sellsData.data];
  res.send(sellsData.data);
};

export { sells };
