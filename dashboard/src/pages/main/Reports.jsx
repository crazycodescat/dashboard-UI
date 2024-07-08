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

// HOOKS
import useFetch from '../../hooks/useFetch';
import axios from 'axios';
// import { useReportContext } from '../../hooks/useReportContext';

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

const image =
  'https://www.pikpng.com/pngl/m/80-805068_my-profile-icon-blank-profile-picture-circle-clipart.png';
const data2 = [];

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

// const filterChips = ['India', 'India', 'India', 'India', 'India', 'India'];

const data = [
  {
    id: 1,
    name: 'taiyyab',
    age: 22,
  },
  {
    id: 2,
    name: 'taiyyab',
    age: 22,
  },
  {
    id: 3,
    name: 'taiyyab',
    age: 22,
  },
  {
    id: 4,
    name: 'taiyyab',
    age: 22,
  },
];

const Reports = () => {
  const {
    itemsSaleReportDataMapper,
    inventoryReportDataMapper,
    dailySaleReportDataMapper,
    purchaseForecastReportDataMapper,
  } = useReportsMapper();
  const [activeHeader, setActiveHeader] = useState(false);
  const [filterChips, setFilterChips] = useState([
    'India',
    'India',
    'India',
    'India',
    'India',
    'India',
  ]);
  const { fetch } = useFetch();
  const { reportsParams } = useParams();

  useEffect(() => {
    const loadData = async () => {
      const prodData = await getRequest('/product', 'get', { per_page: 20 });
      console.log(prodData);
      prodData.data.forEach((prod) => {
        data2.push(prod);
      });

      console.log(prodData);

      if (reportsParams === import.meta.env.VITE_REPORT_ITEM_SALE) {
        itemsSaleReportDataMapper(data);
      } else if (reportsParams === import.meta.env.VITE_REPORT_INVENTORY) {
        inventoryReportDataMapper(...data);
      } else if (
        reportsParams === import.meta.env.VITE_REPORT_PURCHASE_FORECAST
      ) {
        purchaseForecastReportDataMapper(...data);
      } else if (
        reportsParams === import.meta.env.VITE_REPORT_VITE_REPORT_DAILY_SALE
      ) {
        dailySaleReportDataMapper(...data);
      }
    };
    loadData();
  }, [fetch, reportsParams]);

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
  return (
    <>
      <div className="flex flex-col gap-8">
        <div className="text-3xl font-bold mt-12">ITEMS SALE</div>
        {/* FORMAT OUTPUTS */}
        <FormatOutputs columns={columns} />

        <OptionsWrapper wrapperName="filters">
          <div className="grid grid-cols-4 gap-2 max-w-[1000px]">
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
        </OptionsWrapper>
        <DataTable columns={columns} data={data2}></DataTable>
        {/* <DataTableToDownload data={data} /> */}
      </div>
    </>
  );
};

export default Reports;
