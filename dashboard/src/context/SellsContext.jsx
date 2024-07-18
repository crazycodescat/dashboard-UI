/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from 'react';
import { getRequest } from '../utils/request';

const SellsContext = createContext();

const SellsProvider = ({ children }) => {
  const [sells, setSells] = useState(undefined); // Initialize as undefined

  useEffect(() => {
    const loadInitialState = async () => {
      const indexedDBData = await loadInitialStateViaIndexedDB();
      if (indexedDBData) {
        setSells(indexedDBData);
      } else {
        await loadSells();
      }
    };

    loadInitialState();
  }, []);

  const loadSells = async () => {
    const res = await getRequest('/sell', 'get', { per_page: 4854 });
    const data = res && res.data;

    if (data) {
      await setSellsData(data); // Save to IndexedDB
      setSells(data); // Set state
    }
  };

  return (
    <SellsContext.Provider value={{ sells, setSells }}>
      {children}
    </SellsContext.Provider>
  );
};

const loadInitialStateViaIndexedDB = () => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open('sellsDB', 1);

    request.onsuccess = (event) => {
      const db = event.target.result;
      const transaction = db.transaction('sellsStore', 'readonly');
      const objectStore = transaction.objectStore('sellsStore');
      const getAllRequest = objectStore.getAll();

      getAllRequest.onsuccess = (event) => {
        resolve(event.target.result); // Return all data
      };

      getAllRequest.onerror = (event) => {
        console.error('Error retrieving data:', event.target.error);
        reject(event.target.error);
      };
    };

    request.onerror = (event) => {
      console.error('Error opening database:', event.target.error);
      reject(event.target.error);
    };
  });
};

const setSellsData = async (dataArray) => {
  const request = indexedDB.open('sellsDB', 1);

  request.onupgradeneeded = (event) => {
    const db = event.target.result;
    db.createObjectStore('sellsStore', { keyPath: 'id' });
  };

  request.onsuccess = (event) => {
    const db = event.target.result;
    const transaction = db.transaction('sellsStore', 'readwrite');
    const objectStore = transaction.objectStore('sellsStore');

    dataArray.forEach((data) => {
      if (!data.id) {
        console.error('Data must have an "id" property:', data);
        return; // Skip this item if it doesn't have an id
      }

      const addRequest = objectStore.add(data);
      addRequest.onsuccess = () => {
        console.log('Data added to the database:', data);
      };

      addRequest.onerror = (event) => {
        console.error('Error adding data:', event.target.error);
      };
    });

    transaction.oncomplete = () => {
      console.log('All data added successfully');
    };

    transaction.onerror = (event) => {
      console.error('Transaction error:', event.target.error);
    };
  };

  request.onerror = (event) => {
    console.error('Error opening database:', event.target.error);
  };
};

export { SellsProvider, SellsContext };
