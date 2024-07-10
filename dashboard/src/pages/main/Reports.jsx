/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import FilterHeader from '../../components/reports/FilterHeader';
import FormatOutputs from '../../components/reports/FormatOutputs';
import OptionsWrapper from '../../components/reports/OptionsWrapper';
import FiltersContent from '../../components/reports/FiltersContent';
import DataTable from '../../components/DataTable';
import useReportsMapper from '../../hooks/useReportsMapper';
import Chips from '../../components/Chips';
import DataTableToDownload from '../../components/DataTableToDownload';
import { getRequest } from '../../utils/request';
import TablePagination from '../../components/reports/TablePagination';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import PerPageItems from '../../components/reports/PerPageItems';
import { getProductStocks } from '../../utils/getStocks';
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
  const [prodData, setprodData] = useState([]); // State for product data
  const [paginationLink, setPaginationLink] = useState({}); // State for pagination links
  const [currentPage, setCurrentPage] = useState(1); // State for current page number
  const [perPage, setPerPage] = useState(10);
  const { reportsParams } = useParams(); // Accessing URL parameters using React Router
  const { fetch, error, loading } = useFetch(); // Custom fetch hook

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

      if (prodData) {
        // Extract pagination links from response and set them in state
        setPaginationLink({
          prev: prodData.links.prev,
          next: prodData.links.next,
          last_page: prodData.meta.last_page,
          from: prodData.meta.from,
          total: prodData.meta.total,
        });

        // Mapping fetched data to match columns configuration
        const mappedData = prodData.data.map((data, i) => ({
          image_url: data.image_url,
          category: { name: data.category ? data.category.name : '' },
          stock: getProductStocks(data.product_variations),
          price: null,
          size: data.product_custom_field3 ? data.product_custom_field3 : '',
          sku: data.sku ? data.sku : '',
          total_sales: null,
          design: null,
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

        // Setting mapped data in the prodData state
        setprodData(mappedData);
      }
    };
    // Calling loadData function when currentPage changes
    loadData();
  }, [currentPage, perPage, fetch]); // Dependencies array

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

  // Function to handle next page click
  const nextPageHandler = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  // Function to handle previous page click
  const prevPageHandler = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  // Function to navigate to last page
  const lastPageHandler = () => {
    setCurrentPage(paginationLink.last_page);
  };

  return (
    <>
      <div className="flex flex-col gap-2">
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
        ></DataTable>

        {/* Pagination Section */}
        <TablePagination>
          {/* Button for previous page */}
          <button
            onClick={prevPageHandler}
            className=" text-white p-2 flex gap-2 rounded-sm border border-solid border-gray-300"
            disabled={!paginationLink.prev}
          >
            <FaChevronLeft />
            <p>Previous</p>
          </button>
          <div className="flex gap-4">
            {/* Button to navigate to first page */}
            <button
              onClick={() => setCurrentPage(1)}
              className={`${
                currentPage <= 1 ? 'hidden' : null
              } w-fit h-fit p-1 rounded-full text-white`}
            >
              1
            </button>
            {/* Button to navigate to previous page */}
            <button
              onClick={() =>
                setCurrentPage((prevCurrentPage) => prevCurrentPage - 1)
              }
              className={` ${
                currentPage <= 1 ? 'hidden' : null
              } w-fit h-fit p-1 rounded-full text-white`}
            >
              {currentPage - 1}
            </button>
            {/* Button to display current page */}
            <button className="bg-white w-fit h-fit p-1 rounded-full text-black">
              {currentPage}
            </button>
            <p
              className={`${
                paginationLink.last_page === currentPage ? 'hidden' : null
              }`}
            >
              ...
            </p>
            {/* Button to navigate to last page */}
            <button
              className={`${
                paginationLink.last_page === currentPage ? 'hidden' : ''
              }`}
              onClick={lastPageHandler}
            >
              {paginationLink.last_page}
            </button>
          </div>
          {/* Button for next page */}
          <button
            onClick={nextPageHandler}
            className=" text-white p-2 flex gap-2 rounded-sm border border-solid border-gray-300"
            disabled={paginationLink.last_page === currentPage}
          >
            <p>Next</p>
            <FaChevronRight />
          </button>
        </TablePagination>
      </div>
    </>
  );
};

export default Reports;
