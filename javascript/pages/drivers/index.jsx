import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaView, View } from "react-native";
import DriversList from "./list";
import DriverForm from "./form/basic";
import EmergencyContactForm from "./form/emergency-contact";
// import AssignVehicle from "./form/assign-vehicle";
import styles from "../style";

const Stack = createNativeStackNavigator();

const Drivers = () => {
  return (
    <View style={styles.container}>
      <Stack.Navigator initialRouteName={"Drivers"}>
        <Stack.Screen name="Drivers" component={DriversList} />
        <Stack.Screen name="Add Driver" component={DriverForm} />
        <Stack.Screen name="Emergency Contact" component={EmergencyContactForm} />
        {/* <Stack.Screen name="Assign Vehicle" component={AssignVehicle} /> */}
      </Stack.Navigator>
    </View>
  );
};

export default Drivers;
