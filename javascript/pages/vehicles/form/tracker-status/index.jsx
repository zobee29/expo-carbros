import React from "react";
import { View, Text } from "react-native";
import styles from "../style";
import Switch from "components/switch";
import TextInput from "components/text-input";
import Button from "components/button";
import styled from "styled-components/native";
import dayjs from "dayjs";
import { theme } from "theme";

const TrackerForm = styled.View`
  width: 100%;
`;

const TrackerStatus = ({ navigation }) => {
  const [isTracking, setIsTracking] = React.useState(false);

  const onSubmit = () => {
    console.log("TO-DO: Submit tracker status");
    navigation.navigate("Inspection Status");
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Switch
          label="Tracker Installed"
          onValueChange={setIsTracking}
          value={isTracking}
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
