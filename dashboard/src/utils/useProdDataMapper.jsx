// import { getProductStocks } from '../utils/getStocks';
import useGetStocks from '../hooks/useGetStocks';

const useProdDataMapper = () => {
  const { getProductStocks } = useGetStocks();

  const DataMapper = (prodData) => {
    // Mapping fetched data to match columns configuration
    const mappedData = prodData.map((data) => ({
      image_url: data.image_url,
      category: { name: data.category ? data.category.name : '' },
      stock: getProductStocks(data.product_variations),
      price: null,
      size: data.product_custom_field3 ? data.product_custom_field3 : '',
      sku: data.sku ? data.sku : '',
      total_sales: null,
      design: data.name,
      sell_quantity: null,
      sell_price: null,
      subtotal: null,
      sell_invoice_no: null,
      unit_price: null,
      tax:
        data.product_tax !== null
          ? data.product_tax.name
          : 'Tax Info is Not Available',
      tax_included_price: null,
    }));

    return mappedData;
  };
  return { DataMapper };
};

export default useProdDataMapper;
