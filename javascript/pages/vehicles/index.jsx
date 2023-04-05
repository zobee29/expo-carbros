import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View } from "react-native";
import VehiclesList from "./list";
import styles from "../style";
import HeaderButtons from "./components/header-buttons";

const Stack = createNativeStackNavigator();

const Vehicles = () => {
  return (
    <View style={styles.container}>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerRight: () => <HeaderButtons />,
          }}
          name="Vehicles"
          component={VehiclesList}
        />
      </Stack.Navigator>
    </View>
  );
};

export default Vehicles;
