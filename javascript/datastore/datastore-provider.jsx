import React, { useState, useEffect, useCallback } from "react";
import { DataStoreContext } from "./datastore-context";
import { VehicleService } from "../services";

const DataStoreProvider = ({ children }) => {
  const [vehicles, setVehicles] = useState([]);

  const getVehicles = () => {
    VehicleService.list().then((response) => {
      setVehicles(response);
    });
  };

  useEffect(() => {
    getVehicles();
  }, [vehicles.length]);

  return (
    <DataStoreContext.Provider
      value={{ vehicles, reloadVehicles: getVehicles }}
    >
      {children}
    </DataStoreContext.Provider>
  );
};

export default DataStoreProvider;
