import useLocationContext from '../hooks/useLocationContext';

const useFilters = () => {
  const { locations } = useLocationContext();

  const locationsFilter = () => {
    const locationCities =
      locations &&
      locations.map((location) => {
        return { name: location.city, id: location.id }
        // return location.city;
      });

    return locationCities;
  };

  return { locationsFilter };
};

export default useFilters;
