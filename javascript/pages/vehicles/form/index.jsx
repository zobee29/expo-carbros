import React, { useState } from "react";
import { View } from "react-native";
import { TextInput, Text, Button, Menu, Divider } from "react-native-paper";
import styles from "./style";
import { theme } from "theme";

const CarForm = () => {
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [label, setLabel] = useState("");
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

  return (
    <View style={styles.container}>
      <Menu
        visible={showMakeMenu}
        onDismiss={() => setShowMakeMenu(false)}
        anchorPosition={"bottom"}
        anchor={
          <Button onPress={() => setShowMakeMenu(true)}>
            <TextInput
              value={make ? make : "Select Car Make"}
              onPress={() => {}}
              mode={"outlined"}
              outlineColor={showMakeMenu ? theme.colors.primary : "black"}
              activeOutlineColor={showMakeMenu ? theme.colors.primary : "black"}
              style={styles.fullWidth}
              right={
                <TextInput.Icon
                  icon="menu-down"
                  onPress={() => setShowMakeMenu(true)}
                />
              }
            />
          </Button>
        }
      >
        <Menu.Item onPress={() => onMakeSelect("Toyota")} title="Toyota" />
        <Menu.Item onPress={() => onMakeSelect("Honda")} title="Honda" />
        <Menu.Item onPress={() => onMakeSelect("Nissan")} title="Nissan" />
      </Menu>
      <Menu
        visible={showModelMenu}
        onDismiss={() => setShowModelMenu(false)}
        anchorPosition={"bottom"}
        anchor={
          <Button onPress={() => setShowModelMenu(true)}>
            <TextInput
              value={model ? model : "Select Car Mode"}
              onPress={() => {}}
              mode={"outlined"}
              outlineColor={showModelMenu ? theme.colors.primary : "black"}
              activeOutlineColor={
                showModelMenu ? theme.colors.primary : "black"
              }
              style={styles.fullWidth}
              right={
                <TextInput.Icon
                  icon="menu-down"
                  onPress={() => setShowMakeMenu(true)}
                />
              }
            />
          </Button>
        }
      >
        <Menu.Item onPress={() => onModelSelect("Camry")} title="Camry" />
        <Menu.Item onPress={() => onModelSelect("Accord")} title="Accord" />
        <Menu.Item onPress={() => onModelSelect("Altima")} title="Altima" />
      </Menu>
      <Divider />
      <TextInput
        label="Year"
        placeholder="YYYY"
        value={year}
        mode={"outlined"}
        outlineColor={yearError ? "red" : "black"}
        activeOutlineColor={yearError ? "red" : theme.colors.primary}
        style={[styles.fullWidth, styles.input]}
        onChangeText={(text) => handleYearChange(text)}
        right={yearError && <TextInput.Icon icon="alert" color="red" />}
      />
      <Divider />
      <TextInput
        label="Label"
        value={label}
        mode={"outlined"}
        placeholder="e.g. 'Hot Hybrid'"
        activeOutlineColor={theme.colors.primary}
        outlineColor={"black"}
        style={[styles.fullWidth, styles.input]}
        onChangeText={(text) => setLabel(text)}
      />
      <Divider />
      <TextInput
        label="VIN"
        value={vin}
        mode={"outlined"}
        placeholder="XXXXXXXXXXXXXXXXX"
        activeOutlineColor={vinError ? "red" : theme.colors.primary}
        outlineColor={vinError ? "red" : "black"}
        style={[styles.fullWidth, styles.input]}
        onChangeText={(text) => handleVinChange(text)}
        right={vinError && <TextInput.Icon icon="alert" color="red" />}
      />
    </View>
  );
};

export default CarForm;
