import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaView, View } from "react-native";
import VehiclesList from "./list";
import BasicInfo from "./form/basic";
import Registration from "./form/registration";
import TrackerStatus from "./form/tracker-status";
import InspectionStatus from "./form/inspection-status";
import AvailabilityStatus from "./form/availability-status";
import styles from "../style";
import HeaderButtons from "./components/header-buttons";

const Stack = createNativeStackNavigator();

const Vehicles = () => {
  return (
    <View style={styles.container}>
      <Stack.Navigator initialRouteName={"Vehicles"}>
        <Stack.Screen
          options={({ navigation }) => ({
            headerRight: () => <HeaderButtons navigation={navigation} />,
          })}
          name="Vehicles"
          component={VehiclesList}
        />
        <Stack.Screen name="Add Vehicle" component={BasicInfo} />
        <Stack.Screen name="Registration" component={Registration} />
        <Stack.Screen name="Tracker Status" component={TrackerStatus} />
        <Stack.Screen name="Inspection Status" component={InspectionStatus} />
        <Stack.Screen
          name="Availability Status"
          component={AvailabilityStatus}
        />
      </Stack.Navigator>
    </View>
  );
};

export default Vehicles;
