import React from "react";
import { Text, View } from "react-native";
import styles from "./style";
import VehicleCard from "../components/vehicle-card";
import FilterChips from "../components/filter-chips";

const MOCK_VEHICLES = [
  {
    id: 1,
    make: "Toyota",
    model: "Corolla",
    year: 2005,
    color: "Blue",
    vinSnippet: "WXYZ",
    status: "With Zohaib Farooqi",
    upcoming: "Next oil change: April 25th (two weeks from now)",
  },
  {
    id: 2,
    make: "Honda",
    model: "Civic",
    year: 2007,
    color: "Red",
    vinSnippet: "ABCD",
    status: "Available",
  },
  {
    id: 3,
    make: "Ford",
    model: "F-150",
    year: 2010,
    color: "Black",
    vinSnippet: "EFGH",
    status: "Unavailable with Star Auto",
  },
];

const VehiclesList = () => {
  return (
    <View style={styles.container}>
      <FilterChips />
      <View style={styles.content}>
        {MOCK_VEHICLES.map((vehicle) => (
          <VehicleCard key={vehicle.id} vehicle={vehicle} />
        ))}
      </View>
    </View>
  );
};

export default VehiclesList;
