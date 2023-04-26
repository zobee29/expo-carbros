import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import styles from "./style";
import VehicleCard from "../components/vehicle-card";
import FilterChips from "../components/filter-chips";
import TextInput from "components/text-input";
import { VehicleService } from "services";

const VehiclesList = ({ route }) => {
  const [vehicles, setVehicles] = useState([]);
  const [filteredVehicles, setFilteredVehicles] = useState(vehicles);
  const [selectedFilter, setSelectedFilter] = useState(null);

  useEffect(() => {
    const index = vehicles.findIndex(
      (vehicle) => vehicle.id === route.params?.vehicle?.id
    );
    if (route.params?.vehicle && index === -1) {
      setVehicles((vehicles) => [...vehicles, route.params.vehicle]);
    }
  }, [route.params?.vehicle]);

  useEffect(() => {
    if (vehicles.length === 0) {
      VehicleService.list().then((vehicles) => {
        setVehicles(vehicles);
        setFilteredVehicles(vehicles);
      });
    }
  }, []);

  const applyFilters = () => {
    if (!selectedFilter) {
      setFilteredVehicles(vehicles);
    } else {
      setFilteredVehicles(
        vehicles.filter((vehicle) => {
          if (selectedFilter === "available") {
            return vehicle.is_available === "available";
          }
          if (selectedFilter === "unavailable") {
            return vehicle.is_available === "unavailable";
          }
          if (selectedFilter === "upcoming_maintenance") {
            return vehicle.status === "upcoming_maintenance";
          }
        })
      );
    }
  };

  useEffect(applyFilters, [selectedFilter]);

  return (
    <View style={styles.container}>
      <FilterChips
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
      />
      <View style={styles.content}>
        {filteredVehicles.map((vehicle) => (
          <VehicleCard key={vehicle.id} vehicle={vehicle} />
        ))}
      </View>
    </View>
  );
};

export default VehiclesList;
