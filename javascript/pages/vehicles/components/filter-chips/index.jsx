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

const FilterChips = () => {
  const [selected, setSelected] = useState([]);

  const handlePress = (value) => {
    console.log(value);
    if (selected.includes(value)) {
      setSelected(selected.filter((item) => item !== value));
    } else {
      setSelected([...selected, value]);
    }
  };

  return (
    <View style={styles.container}>
      {FILTER_OPTIONS.map((option) => {
        return (
          <Chip
            key={option.value}
            style={{ margin: 5 }}
            selected={selected.includes(option.value)}
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
