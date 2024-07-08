/* eslint-disable no-unused-vars */
import { useReportContext } from './useReportContext';

// HOOKS
import useFetch from '../hooks/useFetch';

const useReportsMapper = () => {
  const { fetch } = useFetch();

  async function itemsSaleReportDataMapper(salesData) {
    // const product_data = [];
    // const sell_lines = [];
    // const tableData = [];
    // const productIDS = [];
    // const data = salesData.data;
    // console.log(data);

    // data.forEach((sellLine, idx) => {
    //   return sell_lines.push(...sellLine.sell_lines);
    // });
    // data.forEach((saleData, idx) => {
    //   saleData.sell_lines.forEach((sellLine, id) => {
    //     productIDS.push({
    //       product_id: sellLine.product_id,
    //       saleIndex: idx,
    //     });
    //   });
    // });
    // console.log(productIDS);
    const config = {
      url: `${import.meta.env.VITE_BASE_URL}/product`,
      method: 'get',
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`,
        'Content-Type': 'application/json',
        accept: 'application/json',
      },
    };

    const res = await fetch(config);
    // console.log(res);
    // try {
    //   for (let i = 0; i < productIDS.length; i++) {
    //     const config = {
    //       url: `${import.meta.env.VITE_BASE_URL}/connector/api/product/${
    //         productIDS[i].product_id
    //       }`,
    //       method: 'get',
    //       headers: {
    //         Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`,
    //         'Content-Type': 'application/json',
    //         accept: 'application/json',
    //       },
    //     };

    //     const res = await fetch(config);

    //     product_data.push(...res.data.data);
    //   }
    // } catch (error) {
    //   console.error(error);
    // }

    // productIDS.forEach((prodIDS, index) => {
    //   product_data.forEach((product, idx) => {
    //     const initialData = {
    //       // id: sell_lines[idx].id,
    //       image_url: product.image_url,
    //       price: sell_lines[idx].unit_price,
    //       sku: product.sku,
    //       sell_quantity: sell_lines[idx].quantity,
    //       sell_price: sell_lines[idx].unit_price,
    //       unit_price: sell_lines[idx].unit_price,
    //       tax_included_price: sell_lines[idx].unit_price_inc_tax,
    //       total_sales: data[prodIDS.saleIndex].total_before_tax,
    //       stock: '',
    //       size: '',
    //       design: '',
    //       sub_total: '',
    //       sell_invoice_no: '',
    //       tax: '',
    //     };
    //     tableData.push(initialData);
    //   });
    // });
    // const findTotalSale = () => {};
    // console.log(product_data);
    // console.log(sell_lines);
    // console.log(tableData);
  }

  function inventoryReportDataMapper(reportData) {
    console.log(reportData);
  }
  function purchaseForecastReportDataMapper(reportData) {
    console.log(reportData);
  }
  function dailySaleReportDataMapper(reportData) {
    console.log(reportData);
  }
  return {
    itemsSaleReportDataMapper,
    inventoryReportDataMapper,
    purchaseForecastReportDataMapper,
    dailySaleReportDataMapper,
  };
};

export default useReportsMapper;
