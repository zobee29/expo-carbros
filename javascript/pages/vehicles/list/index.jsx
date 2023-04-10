import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import styles from "./style";
import VehicleCard from "../components/vehicle-card";
import FilterChips from "../components/filter-chips";
import TextInput from "components/text-input";
import { VehicleService } from "services";

const VehiclesList = () => {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    VehicleService.list().then((vehicles) => {
      setVehicles(vehicles);
    });
  }, []);

  return (
    <View style={styles.container}>
      <FilterChips />
      <View style={styles.content}>
        {vehicles.map((vehicle) => (
          <VehicleCard key={vehicle.id} vehicle={vehicle} />
        ))}
      </View>
    </View>
  );
};

export default VehiclesList;
