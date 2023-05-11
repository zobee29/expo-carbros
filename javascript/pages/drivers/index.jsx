import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaView, View } from "react-native";
import DriversList from "./list";
import AddDrivers from "./form";
import styles from "../style";

const Stack = createNativeStackNavigator();

const Drivers = () => {
  return (
    <View style={styles.container}>
      <Stack.Navigator initialRouteName={"Drivers"}>
        <Stack.Screen name="Drivers" component={DriversList} />
        <Stack.Screen name="Add Driver" component={AddDrivers} />
      </Stack.Navigator>
    </View>
  );
};

export default Drivers;
