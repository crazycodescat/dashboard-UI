/* eslint-disable no-unused-vars */
const useReportsMapper = () => {
  const tableData = [];
  function itemsSaleReportDataMapper(reportData) {
    tableData.push({ ...reportData });
    const columns = [
      { accessor: 'image', header: 'Image' },
      { accessor: 'stock', header: 'Stock' },
      { accessor: 'price', header: 'Price' },
      { accessor: 'size', header: 'Size' },
      { accessor: 'sku', header: 'SKU' },
      { accessor: 'total_sales', header: 'Total Sales' },
      { accessor: 'design', header: 'Design' },
      { accessor: 'sell_quantity', header: 'Sell Quantity' },
      { accessor: 'sell_price', header: 'Sell Price' },
      { accessor: 'subtotal', header: 'Subtotal' },
      { accessor: 'sell_invoice_no', header: 'Sell Invoice No.' },
      { accessor: 'unit_price', header: 'Unit Price' },
      { accessor: 'tax', header: 'Tax' },
      { accessor: 'tax_included_price', header: 'Tax Included Price' },
    ];
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
