import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import FilterHeader from '../../components/reports/FilterHeader';
import FormatOutputs from '../../components/reports/FormatOutputs';
import OptionsWrapper from '../../components/reports/OptionsWrapper';
import FiltersContent from '../../components/reports/FiltersContent';
import DataTable from '../../components/DataTable';
import useReportsMapper from '../../hooks/useReportsMapper';

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

const image =
  'https://www.pikpng.com/pngl/m/80-805068_my-profile-icon-blank-profile-picture-circle-clipart.png';
const employees = [
  {
    id: 1,
    image,
  },
];

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

const Reports = () => {
  const {
    itemsSaleReportDataMapper,
    inventoryReportDataMapper,
    dailySaleReportDataMapper,
    purchaseForecastReportDataMapper,
  } = useReportsMapper();
  const [activeHeader, setActiveHeader] = useState(false);
  const { fetch } = useFetch();
  const { reportsParams } = useParams();
  const tableData = [];
  const product_ids = [];

  useEffect(() => {
    const loadData = async () => {
      const data = await fetch({
        url: 'http://localhost:3000/data',
        method: 'get',
      });

      const sell_lines = data[0].sell_lines;
      sell_lines.forEach((sell_line) => {
        product_ids.push(sell_line.product_id);
      });

      console.log(sell_lines);

      const productData = await fetch({
        url: 'http://localhost:3001/data',
        method: 'get',
      });

      console.log(productData);
      console.log(product_ids);

      sell_lines.map((sell_line) => {
        console.log(sell_line);
        product_ids.find(() => {});
      });

      if (reportsParams === import.meta.env.VITE_REPORT_ITEM_SALE) {
        itemsSaleReportDataMapper(...data);
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

    // const handleOutsideClick = (event) => {
    //   if(event.target.closest('.close'))
    // };

    // document.addEventListener('mousedown', handleOutsideClick);
    // return () => {
    //   document.removeEventListener('mousedown', handleOutsideClick);
    // };
  }, [
    fetch,
    reportsParams,
    itemsSaleReportDataMapper,
    inventoryReportDataMapper,
    purchaseForecastReportDataMapper,
    dailySaleReportDataMapper,
    product_ids,
  ]);

  const activeHeaderHandler = (i) => {
    setActiveHeader(i);
  };
  return (
    <>
      <div className="flex flex-col gap-8">
        <div className="text-3xl font-bold">ITEMS SALE</div>
        <FormatOutputs />
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
        </OptionsWrapper>
        <DataTable columns={columns} data={employees}></DataTable>
      </div>
    </>
  );
};

export default Reports;
