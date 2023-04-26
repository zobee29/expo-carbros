import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import styles from "./style";
import VehicleCard from "../components/vehicle-card";
import FilterChips from "../components/filter-chips";
import TextInput from "components/text-input";
import { VehicleService } from "services";

const VehiclesList = ({ route }) => {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    const index = vehicles.findIndex(
      (vehicle) => vehicle.id === route.params?.vehicle?.id
    );
    if (route.params?.vehicle && index === -1) {
      setVehicles((vehicles) => [...vehicles, route.params.vehicle]);
    }
  }, [route.params?.vehicle]);

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
