import React from "react";
import { View, Text } from "react-native";
import styles from "../style";
import Switch from "components/switch";
import TextInput from "components/text-input";
import Button from "components/button";
import styled from "styled-components/native";
import { SegmentedButtons } from "react-native-paper";
import { VehicleService } from "services";
import dayjs from "dayjs";
import { theme } from "theme";

const AvailabilityCtaContainer = styled.View`
  text-align: left;
  width: 100%;
  display: flex,
  flex-direction: column;
  gap: 12px;
  padding-top: 12px;
`;

const ChecklistContainer = styled.View`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 12px;
  margin-top: 16px;
`;

const ChecklistItem = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 12px 0px;
`;

const CompletionChip = styled.View`
  background-color: ${theme.colors.secondaryContainer};
  color: ${theme.colors.onSecondaryContainer};
  border-radius: 100px;
  padding: 4px 8px;
  font-size: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const AddButton = styled.TouchableOpacity`
  background-color: ${theme.colors.primary};
  color: white;
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 4px 8px;
`;

const AvailabilityStatus = ({ route, navigation }) => {
  const vehicle = route.params;
  const [isAvailable, setIsAvailable] = React.useState(false);
  const [nickname, setNickname] = React.useState(vehicle?.nickname || "");
  const [notes, setNotes] = React.useState(vehicle?.notes || "");

  const handleAvailabilityChange = (value) => {
    setIsAvailable(value);
  };

  const onSubmit = () => {
    VehicleService.update(vehicle.id, {
      nickname,
      notes,
      is_available: isAvailable,
    }).then(() => {
      navigation.navigate("Vehicles");
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          label="Vehicle Name"
          onChange={(e) => {
            setNickname(e.target.value);
          }}
          value={nickname}
        />
        <ChecklistContainer>
          <AvailabilityCtaContainer>
            <Text>Is this vehicle ready for a driver?</Text>
            <SegmentedButtons
              value={isAvailable}
              onValueChange={handleAvailabilityChange}
              style={{ width: "100%" }}
              buttons={[
                { label: "Available", value: "available" },
                {
                  label: "Unavailable",
                  value: "unavailable",
                  style: { width: "fit-content" },
                },
              ]}
            />
          </AvailabilityCtaContainer>
          <ChecklistItem>
            <Text>Registration Completed</Text>
            {vehicle.is_registered ? (
              <CompletionChip>Complete</CompletionChip>
            ) : (
              <AddButton onPress={() => navigation.navigate("Registration")} />
            )}
          </ChecklistItem>
          <ChecklistItem>
            <Text>Tracker Installed</Text>
            {vehicle.is_tracking ? (
              <CompletionChip>Complete</CompletionChip>
            ) : (
              <AddButton
                onPress={() => navigation.navigate("Tracker Status")}
              />
            )}
          </ChecklistItem>
          <ChecklistItem>
            <Text>Inspection Completed</Text>
            {vehicle.is_inspected ? (
              <CompletionChip>Complete</CompletionChip>
            ) : (
              <AddButton
                onPress={() => navigation.navigate("Inspection Status")}
              />
            )}
          </ChecklistItem>
          <TextInput
            label="Notes"
            onChange={(e) => {
              setNotes(e.target.value);
            }}
            placeholder="Add notes here"
            value={notes}
            multiline={true}
            numberOfLines={4}
          />
        </ChecklistContainer>
      </View>
      <View style={styles.ctaContainer}>
        <Button mode="contained" style={styles.fullWidth} onPress={onSubmit}>
          Continue to Availability Status
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

export default AvailabilityStatus;
