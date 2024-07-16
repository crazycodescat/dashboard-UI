/* eslint-disable react/prop-types */
// PACKAGES
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

// COMPONENTS
import Chips from '../Chips';

// HOOKS
import useLocationContext from '../../hooks/useLocationContext';
import useFilters from '../../hooks/useFilters';

const Filters = ({ loadData }) => {
  const [activeHeader, setActiveHeader] = useState(false); // State for active filter header
  const [locationFilter, setLocationFilter] = useState([]); // State for location filter
  const { locations } = useLocationContext();
  const { locationsFilter } = useFilters();

  // State for displaying selected filters as chips
  const [filterChips, setFilterChips] = useState([]);

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

  const locationFilterHandler = (event, item) => {
    const selectedName = event.target.value;
    const selectedItem = item.filterContent.find(
      (content) => content.name === selectedName
    );

    if (selectedItem) {
      const selectedId = selectedItem.id;
      const params = {
        location_id: selectedId, // Use the selected ID here
      };

      // Check if the chip already exists
      const existingChipIndex = filterChips.findIndex(
        (chip) => chip.identifier === 'location'
      );

      if (existingChipIndex === -1) {
        // If the chip doesn't exist, add it
        setFilterChips((prev) => [
          ...prev,
          { identifier: 'location', name: selectedName },
        ]);
      } else {
        // If the chip exists, replace it with the new chip
        setFilterChips((prev) => {
          const updatedChips = [...prev];
          updatedChips[existingChipIndex] = {
            identifier: 'location',
            name: selectedName,
          };
          return updatedChips;
        });
      }

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
      filterFunction: locationFilterHandler,
    },
    {
      identifier: 'category',
      filterContent: [
        { name: 'category 1', id: '1' },
        { name: 'category 1', id: '1' },
        { name: 'category 1', id: '1' },
        { name: 'category 1', id: '1' },
        { name: 'category 1', id: '1' },
        { name: 'category 1', id: '1' },
      ],
      filterFunction: locationFilterHandler,
    },
    {
      identifier: 'product type',
      filterContent: [
        { name: 'product type', id: '1' },
        { name: 'product type', id: '1' },
        { name: 'product type', id: '1' },
        { name: 'product type', id: '1' },
        { name: 'product type', id: '1' },
        { name: 'product type', id: '1' },
      ],
      filterFunction: locationFilterHandler,
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
  ];

  useEffect(() => {
    const locationCities = locationsFilter();
    setLocationFilter(locationCities);
  }, [locations]);

  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-lg font-semibold uppercase w-fit">Filters</h2>
      <div className="flex flex-wrap gap-2 w-fit">
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
