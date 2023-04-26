import React, { useState } from "react";
import { View } from "react-native";
import { Chip } from "react-native-paper";
import styles from "./style";

const FILTER_OPTIONS = [
  {
    label: "Available",
    value: "available",
  },
  {
    label: "Unavailable",
    value: "unavailable",
  },
  {
    label: "Upcoming Maintenance",
    value: "upcoming_maintenance",
  },
];

const FilterChips = ({ selectedFilter, setSelectedFilter }) => {
  const handlePress = (value) => {
    if (selectedFilter === value) {
      setSelectedFilter(null);
    } else {
      setSelectedFilter(value);
    }
  };

  return (
    <View style={styles.container}>
      {FILTER_OPTIONS.map((option) => {
        return (
          <Chip
            key={option.value}
            style={{ margin: 5 }}
            selected={selectedFilter === option.value}
            onPress={() => handlePress(option.value)}
          >
            {option.label}
          </Chip>
        );
      })}
    </View>
  );
};

export default FilterChips;
