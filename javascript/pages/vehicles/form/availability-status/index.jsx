import React from "react";
import { View, Text } from "react-native";
import styles from "../style";
import Switch from "components/switch";
import TextInput from "components/text-input";
import Button from "components/button";
import styled from "styled-components/native";
import { SegmentedButtons } from "react-native-paper";
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

const InspectionStatus = ({ navigation }) => {
  const [isAvailable, setIsAvailable] = React.useState(false);

  const handleAvailabilityChange = (value) => {
    setIsAvailable(value);
  };

  const onSubmit = () => {
    console.log("TO-DO: Submit registration form");
    navigation.navigate("Tracker Status");
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          label="Vehicle Name"
          onChange={() => {}}
          value={"05-Blue-Camry-4490"}
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
            {/* {false ? <CompletionChip /> : <AddButton />} */}
            <View />
          </ChecklistItem>
          <ChecklistItem>
            <Text>Tracker Installed</Text>
            {/* {false ? <CompletionChip /> : <AddButton />} */}
            <View />
          </ChecklistItem>
          <ChecklistItem>
            <Text>Inspection Completed</Text>
            {/* {false ? <CompletionChip /> : <AddButton />} */}
            <View />
          </ChecklistItem>
          <TextInput
            label="Notes"
            onChange={() => {}}
            placeholder="Add notes here"
            value={""}
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

export default InspectionStatus;
