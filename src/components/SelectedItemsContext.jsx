import React, { createContext, useState, useCallback } from 'react';
import data from "../data.json";

export const SelectedItemsContext = createContext();

export const SelectedItemsProvider = ({ children }) => {
  const [selectedItems, setSelectedItems] = useState([]);

  const addItem = useCallback((id) => {
    const item = data.find((item) => item.id === id);
    if (item) {
      setSelectedItems((prevItems) => [...prevItems, item]);
    }
  }, []);

  const removeItem = useCallback((id) => {
    setSelectedItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }, []);

  return (
    <SelectedItemsContext.Provider value={{ selectedItems, addItem, removeItem }}>
      {children}
    </SelectedItemsContext.Provider>
  );
};
