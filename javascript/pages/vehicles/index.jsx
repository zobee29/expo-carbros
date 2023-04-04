import React from "react";
import { Text, View } from "react-native";
import styles from "../style";
import VehicleCard from "./components/vehicle-card";

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

const Vehicles = () => {
  return (
    <View style={styles.container}>
      {MOCK_VEHICLES.map((vehicle) => (
        <VehicleCard key={vehicle.id} vehicle={vehicle} />
      ))}
    </View>
  );
};

export default Vehicles;
