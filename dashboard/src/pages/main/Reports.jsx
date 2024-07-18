/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// COMPONENTS
import Filters from '../../components/reports/Filters';
import FormatOutputs from '../../components/reports/FormatOutputs';
import DataTable from '../../components/DataTable';
import PerPageItems from '../../components/reports/PerPageItems';
import useProdDataMapper from '../../utils/useProdDataMapper';

// HOOKS
import useFetch from '../../hooks/useFetch';

// Columns configuration for the reports table
const columns = [
  { accessor: 'image_url', header: 'Image', isTrue: true },
  { accessor: 'category', header: 'Category', isTrue: true },
  { accessor: 'stock', header: 'Stock', isTrue: true },
  { accessor: 'price', header: 'Price', isTrue: true },
  { accessor: 'size', header: 'Size', isTrue: true },
  { accessor: 'sku', header: 'SKU', isTrue: true },
  { accessor: 'total_sales', header: 'Total Sales', isTrue: true },
  { accessor: 'design', header: 'Design', isTrue: true },
  { accessor: 'sell_quantity', header: 'Sell Quantity', isTrue: true },
  { accessor: 'sell_price', header: 'Sell Price', isTrue: true },
  { accessor: 'subtotal', header: 'Subtotal', isTrue: true },
  { accessor: 'sell_invoice_no', header: 'Sell Invoice No.', isTrue: true },
  { accessor: 'unit_price', header: 'Unit Price', isTrue: true },
  { accessor: 'tax', header: 'Tax', isTrue: true },
  {
    accessor: 'tax_included_price',
    header: 'Tax Included Price',
    isTrue: true,
  },
];

const Reports = () => {
  // State variables
  const [prodData, setProdData] = useState([]); // State for product data
  const [paginationLink, setPaginationLink] = useState({}); // State for pagination links
  const [currentPage, setCurrentPage] = useState(1); // State for current page number
  const [perPage, setPerPage] = useState(10);
  const [locationId, setLocationId] = useState();
  const [categoryId, setCategoryId] = useState();
  const { reportsParams } = useParams(); // Accessing URL parameters using React Router
  const { fetch, loading } = useFetch(); // Custom fetch hook
  const { DataMapper } = useProdDataMapper();

  const loadData = async (params) => {
    // Fetching product data from API endpoint '/product'
    setProdData([]);

    const prodData = await fetch('/product', 'get', {
      page: currentPage,
      per_page: perPage,
      // location_id: params.location_id,
      // category_id: params.category_id,
      ...params, // Merge with existing params
    });

    if (prodData.data.length > 0) {
      // Extract pagination links from response and set them in state
      setPaginationLink({
        prev: prodData.links.prev,
        next: prodData.links.next,
        last_page: prodData.meta.last_page,
        from: prodData.meta.from,
        total: prodData.meta.total,
      });

      const mappedData = DataMapper(prodData.data);
      // Setting mapped data in the prodData state
      setProdData(mappedData);
      if (params.location_id) {
        // console.log('location');
        setLocationId(params.location_id);
      }
      if (params.category_id) {
        // console.log('category');
        setCategoryId(params.category_id);
      }
    }
  };

  useEffect(() => {
    // Function to load data when currentPage changes
    const loadData = async () => {
      // Fetching product data from API endpoint '/product'
      const prodData = await fetch('/product', 'get', {
        page: currentPage,
        per_page: perPage,
        location_id: locationId,
        category_id: categoryId,
      });

      if (prodData.data.length > 0) {
        // Extract pagination links from response and set them in state
        setPaginationLink({
          prev: prodData.links.prev,
          next: prodData.links.next,
          last_page: prodData.meta.last_page,
          from: prodData.meta.from,
          total: prodData.meta.total,
        });

        const mappedData = DataMapper(prodData.data);
        // Setting mapped data in the prodData state
        setProdData(mappedData);
      }
    };
    // Calling loadData function when currentPage changes
    loadData();
  }, [currentPage, perPage, reportsParams]); // Dependencies array

  return (
    <>
      <div className="flex flex-col gap-2 h-full">
        <div className="text-3xl font-bold ">ITEMS SALE</div>
        {/* Component to format outputs based on columns configuration */}
        <FormatOutputs columns={columns} productData={prodData} />

        <Filters
          loadData={loadData}
          setLocationId={setLocationId}
          setCategoryId={setCategoryId}
          locationId={locationId}
          categoryId={categoryId}
        />

        {/* INPUT TO CHOOSE HOW MANY ITEMS
            PER PAGE
        */}
        <PerPageItems
          paginationLink={paginationLink}
          perPage={perPage}
          setPerPage={setPerPage}
        />

        {/* Component to display DataTable with columns and prodData */}
        <DataTable
          loading={loading}
          columns={columns}
          data={prodData}
          setCurrentPage={setCurrentPage}
          paginationLink={paginationLink}
          currentPage={currentPage}
        ></DataTable>
      </div>
    </>
  );
};

export default Reports;
