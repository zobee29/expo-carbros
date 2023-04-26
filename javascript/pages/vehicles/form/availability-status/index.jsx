import React from "react";
import { View, Text } from "react-native";
import styles from "../style";
import Switch from "components/switch";
import TextInput from "components/text-input";
import Button from "components/button";
import styled from "styled-components/native";
import { SegmentedButtons } from "react-native-paper";
import { VehicleService } from "services";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
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
`;

const ChecklistItem = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 12px 0px;
`;

const AddButton = styled.TouchableOpacity`
  border: 1px solid ${theme.colors.onSurfaceVariant};
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 4px 24px 4px 16px;
  flex-direction: row;
  gap: 4px;
  height: 32px;
`;

const CompletionChip = styled.TouchableOpacity`
  background-color: ${theme.colors.secondaryContainer};
  border: 1px solid ${theme.colors.secondaryContainer};
  border-radius: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  padding: 4px 8px 4px 2px;
  flex-direction: row;
  height: 32px;
  gap: 4px;
`;

const CompletionText = styled.Text`
  color: ${theme.colors.onSecondaryContainer};
  font-weight: bold;
`;

const ButtonText = styled.Text`
  color: ${theme.colors.onSurfaceVariant};
  font-weight: bold;
`;

const Complete = () => {
  return (
    <CompletionChip>
      <MaterialCommunityIcons
        name="check-circle"
        color={theme.colors.onSecondaryContainer}
        size={24}
      />
      <CompletionText>Complete</CompletionText>
    </CompletionChip>
  );
};

const Add = ({ onPress }) => {
  return (
    <AddButton onPress={onPress}>
      <MaterialCommunityIcons
        name="plus"
        color={theme.colors.onSurfaceVariant}
        size={24}
      />
      <ButtonText>Add</ButtonText>
    </AddButton>
  );
};

const ChecklistItemComponent = ({ vehicle, item, navigation }) => {
  if (!vehicle || !item) return null;
  const isComplete = vehicle[item.key];

  return (
    <ChecklistItem>
      <Text>{item.label}</Text>
      {isComplete ? (
        <Complete />
      ) : (
        <Add onPress={() => navigation.navigate(item.to, vehicle)} />
      )}
    </ChecklistItem>
  );
};

const Checklist = [
  {
    label: "Registration Completed",
    to: "Registration",
    key: "is_registered",
  },
  {
    label: "Tracker Installed",
    to: "Tracker Status",
    key: "is_tracked",
  },
  {
    label: "Inpsection Completed",
    to: "Inspection Status",
    key: "is_inspected",
  },
];

const AvailabilityStatus = ({ route, navigation }) => {
  const { vehicle } = route.params;
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
      navigation.navigate("Vehicles", {
        vehicle,
        is_available: isAvailable,
        nickname,
        notes,
      });
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
              showSelectedCheck
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
          {Checklist.map((item) => (
            <ChecklistItemComponent
              key={item.key}
              vehicle={vehicle}
              item={item}
              navigation={navigation}
            />
          ))}
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
