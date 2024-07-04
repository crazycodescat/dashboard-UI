/* eslint-disable no-unused-vars */
import { useReportContext } from './useReportContext';
import useFetch from '../hooks/useFetch';
const useReportsMapper = () => {
  const { fetch } = useFetch();
  const { state, dispatch } = useReportContext();

  // const tableData = [];

  // const initialData = {
  //   id: '',
  //   image_url: '',
  //   stock: '',
  //   price: '',
  //   size: '',
  //   sku: '',
  //   total_sales: '',
  //   design: '',
  //   sell_quantity: '',
  //   sell_price: '',
  //   sub_total: '',
  //   sell_invoice_no: '',
  //   unit_price: '',
  //   tax: '',
  //   tax_included_price: '',
  // };

  async function itemsSaleReportDataMapper(salesData) {
    const sell_lines = salesData[0]?.sell_lines;
    const product_data = [];

    const product_id = sell_lines.map((sell, idx) => sell.product_id);
    try {
      for (let i = 0; i < product_id.length; i++) {
        const productData = await fetch({
          url: 'http://localhost:3001/data',
          method: 'get',
        });
        product_data.push(...productData);
      }
    } catch (error) {
      console.error(error);
    }

    const mappedData = sell_lines.map((sellLine) => {
      // Find the corresponding product in product_data
      const product = product_data.find((product) => {
        return product.id === sellLine.id;
      });

      // Update sellLine with image_url if product is found
      if (product) {
        sellLine.image_url = product.image_url;
      }
      return sellLine;
    });

    dispatch({ type: 'ADD_REPORT', payload: mappedData });

    console.log(mappedData);

    // console.log(product_id);

    // tableData.push({ ...reportData });
    // const columns = [
    //   { accessor: 'image', header: 'Image' },
    //   { accessor: 'stock', header: 'Stock' },
    //   { accessor: 'price', header: 'Price' },
    //   { accessor: 'size', header: 'Size' },
    //   { accessor: 'sku', header: 'SKU' },
    //   { accessor: 'total_sales', header: 'Total Sales' },
    //   { accessor: 'design', header: 'Design' },
    //   { accessor: 'sell_quantity', header: 'Sell Quantity' },
    //   { accessor: 'sell_price', header: 'Sell Price' },
    //   { accessor: 'subtotal', header: 'Subtotal' },
    //   { accessor: 'sell_invoice_no', header: 'Sell Invoice No.' },
    //   { accessor: 'unit_price', header: 'Unit Price' },
    //   { accessor: 'tax', header: 'Tax' },
    //   { accessor: 'tax_included_price', header: 'Tax Included Price' },
    // ];
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
