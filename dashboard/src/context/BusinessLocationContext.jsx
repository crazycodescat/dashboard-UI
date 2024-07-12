/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from 'react';
import { getRequest } from '../utils/request';

const LocationContext = createContext();

const LocationProvider = ({ children }) => {
  const [locations, setLocations] = useState();

  useEffect(() => {
    const loadLocations = async () => {
      const res = await getRequest('/business-location', 'get');
      const data = res && res.data;

      const locationDetails = data.map((data) => {
        return {
          id: data.id,
          business_id: data.business_id,
          location_id: data.location_id,
          name: data.name,
        };
      });
      setLocations(locationDetails);
    };
    loadLocations();
  }, []);

  return (
    <LocationContext.Provider value={{ locations, setLocations }}>
      {children}
    </LocationContext.Provider>
  );
};

export { LocationProvider, LocationContext };
