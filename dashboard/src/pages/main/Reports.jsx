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
import { getRequest } from '../../fetch/request';
import TablePagination from '../../components/reports/TablePagination';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';

// HOOKS
import useFetch from '../../hooks/useFetch';

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

// reports table header columns
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
  const [activeHeader, setActiveHeader] = useState(false);
  const [prodData, setprodData] = useState([]);
  const [paginationLink, setPaginationLink] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const { reportsParams } = useParams();
  const { fetch } = useFetch();
  const productData = [];

  const [filterChips, setFilterChips] = useState([
    'India',
    'India',
    'India',
    'India',
    'India',
    'India',
  ]);

  useEffect(() => {
    const loadData = async () => {
      // Fetching product data from API endpoint '/product' and pushing it in the productData array[]
      const prodData = await getRequest('/product', 'get', {
        page: currentPage,
      });

      console.log(prodData);

      // Extract pagination links from response and set them in state
      setPaginationLink({
        prev: prodData.links.prev,
        next: prodData.links.next,
        last_page: prodData.meta.last_page,
        from: prodData.meta.from,
      });

      const mappedData = prodData.data.map((data, i) => ({
        image_url: data.image_url,
        category: { name: data.category.name },
        stock: data.enable_stock,
        price: null,
        size: data.product_custom_field3,
        sku: data.sku,
        total_sales: null,
        design: null,
        sell_quantity: null,
        sell_price: null,
        subtotal: null,
        sell_invoice_no: null,
        unit_price: null,
        tax: data.product_tax.name,
        tax_included_price: null,
      }));
      // setting productData in the prodData state
      setprodData(mappedData);
    };
    loadData();
  }, [currentPage]);

  const deleteAllChips = () => {
    setFilterChips([]);
  };

  const removeChipsHandler = (index) => {
    const filteredChips = filterChips.filter((chip, i) => {
      return i !== index;
    });
    setFilterChips(filteredChips);
  };

  const activeHeaderHandler = (i) => {
    setActiveHeader(i);
  };

  const nextPageHandler = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const prevPageHandler = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  return (
    <>
      <div className="flex flex-col gap-8">
        <div className="text-3xl font-bold mt-12">ITEMS SALE</div>
        {/* FORMAT OUTPUTS */}
        <FormatOutputs columns={columns} />

        <div className="flex flex-col gap-2">
          <div className="grid grid-cols-4 gap-2 w-full">
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
          <div className="grid grid-cols-chips  gap-2  justify-items-start">
            {filterChips.map((chip, idx) => (
              <Chips
                key={idx}
                activeFilterName={chip}
                index={idx}
                removeChipsHandler={removeChipsHandler}
              />
            ))}
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

        
        <DataTable columns={columns} data={prodData}></DataTable>

        {/* Pagination Section */}

        <TablePagination>
          <button
            onClick={prevPageHandler}
            className=" text-white p-2 flex gap-2 rounded-sm border border-solid border-gray-300"
            disabled={!paginationLink.prev}
          >
            <FaChevronLeft />
            <p>Previous</p>
          </button>
          <div className="flex gap-4">
            <button
              className={` ${
                currentPage <= 1 ? 'hidden' : null
              } w-6 h-6 rounded-full text-white`}
            >
              {currentPage - 1}
            </button>
            <button className="bg-white w-6 h-6 rounded-full text-black">
              {currentPage}
            </button>
            <p>...</p>
            <button>{paginationLink.last_page}</button>
          </div>
          <button
            onClick={nextPageHandler}
            className=" text-white p-2 flex gap-2 rounded-sm border border-solid border-gray-300"
            disabled={!paginationLink.next}
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

// <TablePagination>
//   <button
//     onClick={prevPageHandler}
//     className="text-white p-2 flex gap-2 rounded-sm border border-solid border-gray-300"
//     disabled={!paginationLink.prev}
//   >
//     <FaChevronLeft />
//     <p>Previous</p>
//   </button>

//   <div className="flex gap-4 max-w-12 overflow-x-auto">
//     {/* Generate page buttons dynamically */}
//     {Array.from({ length: paginationLink.last_page }, (_, index) => (
//       <button
//         key={index + 1}
//         onClick={() => handlePageChange(index + 1)}
//         className={`bg-white w-6 h-6 rounded-full text-black ${
//           currentPage === index + 1 ? 'bg-gray-300' : ''
//         }`}
//       >
//         {index + 1}
//       </button>
//     ))}
//   </div>

//   <button
//     onClick={nextPageHandler}
//     className="text-white p-2 flex gap-2 rounded-sm border border-solid border-gray-300"
//     disabled={!paginationLink.next}
//   >
//     <p>Next</p>
//     <FaChevronRight />
//   </button>
// </TablePagination>;
