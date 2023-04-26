import React from "react";
import { View, Text } from "react-native";
import styles from "../style";
import Switch from "components/switch";
import TextInput from "components/text-input";
import Button from "components/button";
import styled from "styled-components/native";
import dayjs from "dayjs";
import { VehicleService } from "services";
import { theme } from "theme";

const TrackerForm = styled.View`
  width: 100%;
`;

const TrackerStatus = ({ route, navigation }) => {
  const { vehicle } = route.params;
  const [isTracked, setIsTracked] = React.useState(vehicle.is_tracked || false);

  const onSubmit = () => {
    VehicleService.update(vehicle.id, { is_tracking: isTracked }).then(() => {
      navigation.navigate("Inspection Status", {
        vehicle: {
          ...vehicle,
          is_tracked: isTracked,
        },
      });
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Switch
          label="Tracker Installed"
          onValueChange={setIsTracked}
          value={isTracked}
        />
      </View>
      <View style={styles.ctaContainer}>
        <Button mode="contained" style={styles.fullWidth} onPress={onSubmit}>
          Continue to Inspection Status
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

export default TrackerStatus;
