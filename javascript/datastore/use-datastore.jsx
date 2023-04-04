import { useContext } from "react";
import { DataStoreContext } from "./datastore-context";

export const useDataStore = () => {
  const { vehicles, reloadVehicles } = useContext(DataStoreContext);

  return { vehicles, reloadVehicles };
};
