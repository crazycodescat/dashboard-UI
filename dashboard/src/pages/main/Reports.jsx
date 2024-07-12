/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import FilterHeader from '../../components/reports/FilterHeader';
import FormatOutputs from '../../components/reports/FormatOutputs';
import FiltersContent from '../../components/reports/FiltersContent';
import DataTable from '../../components/DataTable';
import Chips from '../../components/Chips';
import PerPageItems from '../../components/reports/PerPageItems';
// import { getProductStocks } from '../../utils/getStocks';
import useProdDataMapper from '../../utils/useProdDataMapper';

// HOOKS
import useFetch from '../../hooks/useFetch';

// Static filter items
const filterItems = [
  {
    identifier: 'location',
    filterContent: [
      'india',
      'india',
      'india',
      'india',
      'india',
      'india',
      'india',
      'india',
      'india',
      'india',
      'india',
      'india',
      'india',
    ],
  },
  {
    identifier: 'customer',
    filterContent: [
      'customer 1',
      'customer 2',
      'customer 3',
      'customer 4',
      'customer 5',
      'customer 6',
    ],
  },
  {
    identifier: 'item',
    filterContent: ['item 1', 'item 1', 'item 1', 'item 1', 'item 1', 'item 1'],
  },
  {
    identifier: 'category',
    filterContent: [
      'category 1',
      'category 1',
      'category 1',
      'category 1',
      'category 1',
      'category 1',
    ],
  },
  {
    identifier: 'product type',
    filterContent: [
      'product type 1',
      'product type 1',
      'product type 1',
      'product type 1',
      'product type 1',
      'product type 1',
    ],
  },
  {
    identifier: 'trending items',
    filterContent: [
      'trending item 1',
      'trending item 1',
      'trending item 1',
      'trending item 1',
      'trending item 1',
      'trending item 1',
    ],
  },
];

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
  const [activeHeader, setActiveHeader] = useState(false); // State for active filter header
  const [prodData, setProdData] = useState([]); // State for product data
  const [paginationLink, setPaginationLink] = useState({}); // State for pagination links
  const [currentPage, setCurrentPage] = useState(1); // State for current page number
  const [perPage, setPerPage] = useState(100);
  const { reportsParams } = useParams(); // Accessing URL parameters using React Router
  const { fetch, error, loading } = useFetch(); // Custom fetch hook
  const { DataMapper } = useProdDataMapper();

  // State for displaying selected filters as chips
  const [filterChips, setFilterChips] = useState([
    'India',
    'India',
    'India',
    'India',
    'India',
    'India',
  ]);

  useEffect(() => {
    // Function to load data when currentPage changes
    const loadData = async () => {
      // Fetching product data from API endpoint '/product' and pushing it in the productData array[]

      const prodData = await fetch('/product', 'get', {
        page: currentPage,
        per_page: perPage,
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

  // Function to clear all selected filters
  const deleteAllChips = () => {
    setFilterChips([]);
  };

  // Function to remove a specific filter chip
  const removeChipsHandler = (index) => {
    const filteredChips = filterChips.filter((chip, i) => {
      return i !== index;
    });
    setFilterChips(filteredChips);
  };

  // Function to handle click on filter header
  const activeHeaderHandler = (i) => {
    setActiveHeader(i);
  };

  return (
    <>
      <div className="flex flex-col gap-2 h-full">
        <div className="text-3xl font-bold ">ITEMS SALE</div>
        {/* Component to format outputs based on columns configuration */}
        <FormatOutputs columns={columns} productData={prodData} />

        <div className="flex flex-col gap-2">
          <h2 className="text-lg font-semibold uppercase w-fit">Filters</h2>
          <div className="flex flex-wrap gap-2 w-[900px]">
            {/* Mapping over filterItems to display filter headers */}
            {filterItems.map((item, i) => {
              return (
                <div onClick={() => activeHeaderHandler(i)} key={i}>
                  <FilterHeader
                    activeHeaderHandler={activeHeaderHandler}
                    headerName={item.identifier}
                    classess={`${
                      activeHeader === i
                        ? 'border border-white border-solid'
                        : ''
                    }`}
                  >
                    <FiltersContent>
                      <ul className="rounded-md max-h-52 overflow-y-auto sidebar">
                        {/* Mapping over filterContent to display filter items */}
                        {item.filterContent.map((content, i) => {
                          return (
                            <li
                              key={i}
                              className={`capitalize p-2 bg-primary03 text-xs hover:bg-filtersHeader cursor-pointer filter-content ${
                                item.filterContent.length - 1 === i
                                  ? 'rounded-b-md'
                                  : i === 0
                                  ? 'rounded-t-md'
                                  : ''
                              }`}
                            >
                              {content}
                            </li>
                          );
                        })}
                      </ul>
                    </FiltersContent>
                  </FilterHeader>
                </div>
              );
            })}
          </div>
          {/* Displaying selected filters as chips */}
          <div className="grid grid-cols-chips gap-2  justify-items-start">
            {filterChips.map((chip, idx) => (
              <Chips
                key={idx}
                activeFilterName={chip}
                index={idx}
                removeChipsHandler={removeChipsHandler}
              />
            ))}
            {/* Button to clear all selected filters */}
            {!filterChips.length <= 0 && (
              <button
                onClick={deleteAllChips}
                className="p-2 underline text-xs font-normal"
              >
                Clear All
              </button>
            )}
          </div>
        </div>

        {/* INPUT TO CHOOSE HOW MANY ITEMS
            PER PAGE
        */}
        {/* <PerPageItems
          paginationLink={paginationLink}
          perPage={perPage}
          setPerPage={setPerPage}
        /> */}

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
