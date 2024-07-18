/* eslint-disable react/prop-types */
// PACKAGES
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

// COMPONENTS
import Chips from '../Chips';

// HOOKS
import useLocationContext from '../../hooks/useLocationContext';
import useFilters from '../../hooks/useFilters';

const Filters = ({
  loadData,
  setLocationId,
  setCategoryId,
  locationId,
  categoryId,
}) => {
  const [activeHeader, setActiveHeader] = useState(false); // State for active filter header
  const [locationFilter, setLocationFilter] = useState([]); // State for location filter
  const { locations } = useLocationContext();
  const { locationsFilter } = useFilters();

  // State for displaying selected filters as chips
  const [filterChips, setFilterChips] = useState([]);
  console.log(filterChips);

  // Function to clear all selected filters
  const deleteAllChips = () => {
    setFilterChips([]);
  };

  // Function to remove a specific filter chip
  const removeChipsHandler = (index) => {
    const chipToRemove = filterChips[index];

    // Create a new array of chips without the removed chip
    const filteredChips = filterChips.filter((_, i) => i !== index);

    // Initialize parameters object with current state
    const params = {
      location_id: locationId,
      category_id: categoryId,
    };

    // if (chipToRemove && chipToRemove.identifier === 'location') {
    //   // Prepare parameters based on the chip removed
    //   const params = {
    //     location_id: '',
    //   };
    //   loadData(params);
    //   setLocationId('');
    // }

    if (chipToRemove && chipToRemove.identifier === 'location') {
      // Clear location ID
      params.location_id = '';
      loadData(params);
      setLocationId('');
    }

    if (chipToRemove && chipToRemove.identifier === 'category') {
      // Clear category ID
      params.category_id = '';
      loadData(params);
      setCategoryId('');
    }

    // if (chipToRemove && chipToRemove.identifier === 'category') {
    //   // Prepare parameters based on the chip removed
    //   const params = {
    //     category_id: '',
    //   };
    //   loadData(params);
    //   setCategoryId('');
    // }

    setFilterChips(filteredChips);
  };

  // Function to handle click on filter header
  const activeHeaderHandler = (i) => {
    setActiveHeader(i);
  };

  const locationFilterHandler = (event, item) => {
    const selectedName = event.target.value;
    const selectedItem = item.filterContent.find(
      (content) => content.name === selectedName
    );

    if (selectedItem) {
      const selectedId = selectedItem.id;
      const params = { location_id: selectedId, category_id: categoryId };

      // Add or replace the chip
      setFilterChips((prev) => {
        const existingChipIndex = prev.findIndex(
          (chip) => chip.identifier === 'location'
        );

        if (existingChipIndex === -1) {
          // If the chip doesn't exist, add it
          return [...prev, { identifier: 'location', name: selectedName }];
        } else {
          // If the chip exists, replace it with the new chip
          const updatedChips = [...prev];
          updatedChips[existingChipIndex] = {
            identifier: 'location',
            name: selectedName,
          };
          return updatedChips;
        }
      });

      // Check if the chip already exists
      // const existingChipIndex = filterChips.findIndex(
      //   (chip) => chip.identifier === 'location'
      // );

      // if (existingChipIndex === -1) {
      //   // If the chip doesn't exist, add it
      //   setFilterChips((prev) => [
      //     ...prev,
      //     { identifier: 'location', name: selectedName },
      //   ]);
      // } else {
      //   // If the chip exists, replace it with the new chip
      //   setFilterChips((prev) => {
      //     const updatedChips = [...prev];
      //     updatedChips[existingChipIndex] = {
      //       identifier: 'location',
      //       name: selectedName,
      //     };
      //     return updatedChips;
      //   });
      // }

      // Load data with the selected location ID
      loadData(params);
    }
  };

  const customerFilterHandler = (event) => {
    console.log('Selected value:', event.target.value);
    const selectedName = event.target.value;
    setFilterChips((prev) => [
      ...prev,
      { identifier: 'customer', name: selectedName },
    ]);
  };

  const categoryFilterHandler = (event, item) => {
    // console.log('first');
    // selected category name --> selectedCategoryName
    const selectedCategoryName = event.target.value;

    // selected category item --> selectedCategoryItem
    const selectedCategoryItem = item.filterContent.find(
      (content) => content.name === selectedCategoryName
    );

    if (selectedCategoryItem) {
      // category id --> selectedCategoryId
      const selectedCategoryId = selectedCategoryItem.id;
      // category params
      const params = {
        category_id: selectedCategoryId,
        location_id: locationId,
      };

      // Check if the chip already exists
      const existingChipIndex = filterChips.findIndex(
        (chip) => chip.identifier === 'category'
      );

      // check on chips existance
      if (existingChipIndex === -1) {
        // If the chip doesn't exist, add it
        setFilterChips((prev) => [
          ...prev,
          { identifier: 'category', name: selectedCategoryName },
        ]);
      } else {
        // If the chip exists, replace it with the new chip
        setFilterChips((prev) => {
          const updatedChips = [...prev];
          updatedChips[existingChipIndex] = {
            identifier: 'category',
            name: selectedCategoryName,
          };
          return updatedChips;
        });
      }

      // Load data with the selected category ID
      loadData(params);
    }
  };

  const productTypeFilterHandler = () => {
    console.log('Product Type');
  };

  // Static filter items
  const filterItems = [
    {
      identifier: 'location',
      filterContent: locationFilter && [...locationFilter],
      filterFunction: locationFilterHandler,
    },
    {
      identifier: 'customer',
      filterContent: [
        { name: 'customer1', id: '1' },
        { name: 'customer1', id: '1' },
        { name: 'customer1', id: '1' },
        { name: 'customer1', id: '1' },
        { name: 'customer1', id: '1' },
        { name: 'customer1', id: '1' },
      ],
      filterFunction: customerFilterHandler,
    },
    {
      identifier: 'item',
      filterContent: [
        { name: 'item1', id: '1' },
        { name: 'item1', id: '1' },
        { name: 'item1', id: '1' },
        { name: 'item1', id: '1' },
        { name: 'item1', id: '1' },
        { name: 'item1', id: '1' },
      ],
      // filterFunction: locationFilterHandler,
    },
    {
      identifier: 'category',
      filterContent: [
        { name: 'MACHINE MADE CARPET', id: '1' },
        { name: 'BRAIDED', id: '4' },
        { name: 'CUSHION', id: '6' },
        { name: 'BASKET', id: '8' },
        { name: 'BATHMAT', id: '21' },
        { name: 'BEDSHEET', id: '22' },
        { name: 'BEDSPREAD SET (1n 2n)', id: '23' },
        { name: 'CROCHET JUTE RUG', id: '25' },
        { name: 'CURTAIN', id: '26' },
        { name: 'Custom Color Chart', id: '28' },
        { name: 'DIGITAL PRINTED DURRY', id: '30' },
        { name: 'EXTENSION BOX', id: '31' },
        { name: 'DOORMAT', id: '32' },
        { name: 'DIGITAL TABLE RUNNER', id: '33' },
        { name: 'HAND BAG', id: '34' },
        { name: 'HANDMADE CARPET', id: '35' },
        { name: 'HAND WOVEN CHARPAI/BED', id: '36' },
        { name: 'LEATHER RUG', id: '37' },
        { name: 'MACHINE MADE RUGS', id: '38' },
        { name: 'SCREEN PRINTED RUG', id: '39' },
        { name: 'PLACEMATS', id: '40' },
        { name: 'POUF', id: '41' },
        { name: 'PEN HOLDER', id: '42' },
        { name: 'TABLE RUNNER', id: '43' },
        { name: 'STAINLESS STEEL CARPET CLIP', id: '44' },
        { name: 'TISSUE BOX', id: '45' },
        { name: 'THROW TIE &amp; DYE', id: '46' },
        { name: 'TOWEL', id: '47' },
        { name: 'THROW', id: '50' },
        { name: 'WALL HANGING', id: '51' },
        { name: 'SHAGGY', id: '53' },
        { name: 'WOVEN RUG', id: '54' },
        { name: 'WALL PAPER', id: '55' },
        { name: 'HAND TUFTED NZ WOOL SILK CARPET', id: '57' },
        { name: 'SUIT', id: '58' },
        { name: 'WALL FRAME', id: '59' },
        { name: 'WALL PANEL', id: '60' },
        { name: 'FLOORING', id: '62' },
        { name: 'NOVARA CARPET', id: '64' },
        { name: 'PVC SHEET', id: '65' },
        { name: 'MAT SHEET', id: '66' },
        { name: 'BEAN BAG', id: '67' },
      ],
      filterFunction: categoryFilterHandler,
    },
    {
      identifier: 'product type',
      filterContent: [{ name: 'Single', id: '1' }],
      filterFunction: productTypeFilterHandler,
    },
    {
      identifier: 'trending items',
      filterContent: [
        { name: 'trending item 1', id: '1' },
        { name: 'trending item 1', id: '1' },
        { name: 'trending item 1', id: '1' },
        { name: 'trending item 1', id: '1' },
        { name: 'trending item 1', id: '1' },
        { name: 'trending item 1', id: '1' },
      ],
      filterFunction: locationFilterHandler,
    },
    // {
    //   identifier: `sku's`,
    //   filterContent: [
    //     { name: 'trending item 1', id: '1' },
    //     { name: 'trending item 1', id: '1' },
    //     { name: 'trending item 1', id: '1' },
    //     { name: 'trending item 1', id: '1' },
    //     { name: 'trending item 1', id: '1' },
    //     { name: 'trending item 1', id: '1' },
    //   ],
    //   filterFunction: locationFilterHandler,
    // },
  ];

  useEffect(() => {
    const locationCities = locationsFilter();
    setLocationFilter(locationCities);
  }, [locations]);

  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-lg font-semibold uppercase w-fit">Filters</h2>
      <div className="flex flex-wrap gap-2 max-w-[1000px]">
        {/* Mapping over filterItems to display filter headers */}
        {filterItems.map((item) => {
          return (
            <select
              onChange={(event) => item.filterFunction(event, item)} // Pass item to handler
              key={uuidv4()}
              name="filters"
              id="filters"
              className="flex flex-col gap-2 text-white font-light bg-primary02 p-1 border border-gray-300 rounded-md  focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm cursor-pointer"
            >
              <option
                label={`Filter By ${item.identifier}`}
                disabled
                selected
              ></option>
              {item.filterContent &&
                item.filterContent.map((content) => {
                  return (
                    <option
                      onClick={item.filterFunction}
                      className="text-xs mb-1"
                      key={uuidv4()}
                      value={content.name}
                    >
                      {content.name}
                    </option>
                  );
                })}
            </select>
          );
        })}
        <div className="flex items-center">
          <button className="border border-white rounded-md h-full px-2 font-light text-sm focus:outline-none active:ring-1 active:ring-blue-500 active:border-blue-500 ">
            Filter By sku's
          </button>
        </div>
      </div>
      {/* Displaying selected filters as chips */}
      <div className="flex flex-wrap gap-2 ">
        {filterChips &&
          filterChips.map((chip, idx) => (
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
  );
};

export default Filters;
