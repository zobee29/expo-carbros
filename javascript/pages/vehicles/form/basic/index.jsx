import React, { useState } from "react";
import { View } from "react-native";
import { Text, Menu } from "react-native-paper";
import TextInput from "components/text-input";
import Button from "components/button";
import Dropdown from "components/dropdown";
import styles from "../style";
import { theme } from "theme";
import { VehicleService, VehicleDraftService } from "services";

const MAKE_OPTIONS = [
  { label: "Toyota", value: "Toyota" },
  { label: "Honda", value: "Honda" },
  { label: "Nissan", value: "Nissan" },
];
const MODEL_OPTIONS = [
  { label: "Camry", value: "Camry" },
  { label: "Accord", value: "Accord" },
  { label: "Altima", value: "Altima" },
];

const CarForm = ({ navigation }) => {
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [color, setColor] = useState("");
  const [vin, setVin] = useState("");
  const [showMakeMenu, setShowMakeMenu] = useState(false);
  const [showModelMenu, setShowModelMenu] = useState(false);
  const [yearError, setYearError] = useState(false);
  const [vinError, setVinError] = useState(false);

  const hasValidYear = (year) => {
    const yearRegex = /^\d{4}$/;
    return yearRegex.test(year);
  };

  const hasValidVin = (vin) => {
    const vinRegex = /^[A-HJ-NPR-Z\d]{17}$/;
    return vinRegex.test(vin);
  };

  const handleYearChange = (year) => {
    if (hasValidYear(year)) {
      setYearError(false);
    } else {
      setYearError(true);
    }
    setYear(year);
  };

  const handleVinChange = (vin) => {
    if (vin.length > 17) return;
    if (hasValidVin(vin)) {
      setVinError(false);
    } else {
      setVinError(true);
    }
    setVin(vin);
  };

  const onMakeSelect = (value) => {
    setMake(value);
    setShowMakeMenu(false);
  };

  const onModelSelect = (value) => {
    setModel(value);
    setShowModelMenu(false);
  };

  const onSubmit = () => {
    const data = {
      make,
      model,
      year,
      color,
      vin,
    };
    console.log(data);
    if (make && model && year && color && vin) {
      VehicleService.create(data).then((vehicle) => {
        navigation.navigate("Registration", { ...data, id: vehicle.id });
      });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Dropdown
          onChange={onMakeSelect}
          data={MAKE_OPTIONS}
          labelField="label"
          valueField="value"
          searchField="label"
          onChangeText={(text) => {}}
          value={make}
          label="Make"
          placeholder="Select Car Make"
        />
        <Dropdown
          onChange={onModelSelect}
          data={MODEL_OPTIONS}
          labelField="label"
          valueField="value"
          onChangeText={(text) => {}}
          searchField="label"
          value={model}
          label="Model"
          placeholder="Select Car Model"
        />
        <TextInput
          label="Year"
          placeholder="YYYY"
          value={year}
          error={yearError}
          icon={yearError ? "alert" : null}
          onChangeText={(text) => handleYearChange(text)}
        />
        <TextInput
          label="Color"
          value={color}
          placeholder="e.g. Blue"
          onChangeText={(text) => setColor(text)}
        />
        <TextInput
          label="VIN"
          value={vin}
          placeholder="XXXXXXXXXXXXXXXXX"
          error={vinError}
          onChangeText={(text) => handleVinChange(text)}
        />
      </View>
      <View style={styles.ctaContainer}>
        <Button mode="contained" style={styles.fullWidth} onPress={onSubmit}>
          Continue to Registration
        </Button>
        <Button
          mode="text"
          style={[
            { backgroundColor: "transparent", color: theme.colors.primary },
            styles.fullWidth,
          ]}
          onPress={() => {}}
        >
          Save and Exit
        </Button>
      </View>
    </View>
  );
};

export default CarForm;
