import React, { useState } from "react";
import { View } from "react-native";
import { TextInput, Text, Button, Menu, Divider } from "react-native-paper";
import styles from "./style";

const CarForm = () => {
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [label, setLabel] = useState("");
  const [vin, setVin] = useState("");
  const [showMakeMenu, setShowMakeMenu] = useState(false);
  const [showModelMenu, setShowModelMenu] = useState(false);

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
      <Text>Car Make:</Text>
      <Menu
        visible={showMakeMenu}
        onDismiss={() => setShowMakeMenu(false)}
        anchor={
          <Button onPress={() => setShowMakeMenu(true)}>
            {make ? make : "Select Car Make"}
          </Button>
        }
      >
        <Menu.Item onPress={() => onMakeSelect("Toyota")} title="Toyota" />
        <Menu.Item onPress={() => onMakeSelect("Honda")} title="Honda" />
        <Menu.Item onPress={() => onMakeSelect("Nissan")} title="Nissan" />
      </Menu>
      <Divider />
      <Text>Car Model:</Text>
      <Menu
        visible={showModelMenu}
        onDismiss={() => setShowModelMenu(false)}
        anchor={
          <Button onPress={() => setShowModelMenu(true)}>
            {model ? model : "Select Car Model"}
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
        value={year}
        onChangeText={(text) => setYear(text)}
      />
      <Divider />
      <TextInput
        label="Label"
        value={label}
        onChangeText={(text) => setLabel(text)}
      />
      <Divider />
      <TextInput
        label="VIN"
        value={vin}
        onChangeText={(text) => setVin(text)}
      />
    </View>
  );
};

export default CarForm;
