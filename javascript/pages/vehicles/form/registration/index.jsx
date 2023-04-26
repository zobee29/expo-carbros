import React from "react";
import { View, Text } from "react-native";
import styles from "../style";
import Switch from "components/switch";
import TextInput from "components/text-input";
import Button from "components/button";
import styled from "styled-components/native";
import dayjs from "dayjs";
import { VehicleService, RegistrationService } from "services";
import { theme } from "theme";

const RegistrationCtaContainer = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const UploadedFileContainer = styled.View`
  display: flex;
  flex-direction: column;
  padding: 6px 11px;
  background-color: ${theme.colors.background};
  margin-top: 10px;
  gap: 2px;
`;

const RegistrationContainer = styled.View`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  padding: 10px;
  margin-top: 16px;
  border: 1px solid ${theme.colors.border};
`;

const RegistrationForm = styled.View`
  width: 100%;
`;

const RegistrationUploadButton = styled.TouchableOpacity`
  height: 24px;
  background-color: ${theme.colors.primary};
  color: white;
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const RegistrationButtonText = styled.Text`
  color: white;
  font-size: 9px;
  width: 50px;
  padding-bottom: 2px;
`;

const Registration = ({ route, navigation }) => {
  const { vehicle } = route.params;
  const [isRegistered, setIsRegistered] = React.useState(
    vehicle.is_registered || false
  );
  const [registrationDocument, setRegistrationDocument] = React.useState();
  const [licensePlateNumber, setLicensePlateNumber] = React.useState("");
  const [expirationDate, setExpirationDate] = React.useState("");

  const hasValidLicensePlateNumber = () => {
    return licensePlateNumber.length === 6;
  };

  const hasValidExpirationDate = () => {
    return expirationDate.length === 8;
  };

  const handleLicensePlateNumberChange = (event) => {
    let text = event.target.value;
    if (text.length >= 8) return;
    setLicensePlateNumber(text);
  };

  const handleExpirationDateChange = (event) => {
    let text = event.target.value;
    if (text.length === 2) {
      text = text + "/";
    } else if (text.length === 5) {
      text = text + "/";
    } else if (text.length > 8) {
      return;
    }

    setExpirationDate(text);
  };

  const uploadRegistrationDocument = (event) => {
    const file = event.target.files[0];
    if (file) {
      RegistrationService.upload(
        registrationDocument,
        `${vehicle.nickname}-registration`
      ).then((res) => {
        setRegistrationDocument(res);
      });
    }
  };

  const onSubmit = () => {
    const data = {
      is_registered: isRegistered,
      license_plate_number: licensePlateNumber,
      registration_expiration_date: expirationDate,
      registration_document_id: registrationDocument?.metadata?.fullPath,
    };
    VehicleService.update(vehicle.id, data)
      .then((res) => {
        const updatedVehicle = { ...vehicle, ...data };
        navigation.navigate("Tracker Status", { vehicle: updatedVehicle });
      })
      .catch((err) => {});
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Switch
          label="Registration Completed"
          onValueChange={setIsRegistered}
          value={isRegistered}
        />
        {isRegistered && (
          <RegistrationForm>
            <RegistrationContainer>
              <RegistrationCtaContainer>
                <Text>Registration Document</Text>
                <label for="registration">
                  <RegistrationUploadButton>
                    <RegistrationButtonText>Upload</RegistrationButtonText>
                  </RegistrationUploadButton>
                </label>
                <input
                  type="file"
                  id="registration"
                  style={{ display: "none" }}
                  onChange={(e) => setRegistrationDocument(e.target.files[0])}
                />
              </RegistrationCtaContainer>
              {registrationDocument && (
                <UploadedFileContainer>
                  <Text style={{ fontSize: "11px" }}>
                    Uploaded on:{" "}
                    {dayjs(registrationDocument.lastModifiedDate).format(
                      "MM/DD/YYYY"
                    )}
                  </Text>
                  <Text style={{ fontSize: "9px" }}>
                    {registrationDocument.name}
                  </Text>
                </UploadedFileContainer>
              )}
            </RegistrationContainer>
            <TextInput
              label="License Plate Number"
              placeholder="XXXXXX"
              onChange={handleLicensePlateNumberChange}
              value={licensePlateNumber}
            />
            <TextInput
              label="Expiration Date"
              placeholder="MM/DD/YY"
              onChange={handleExpirationDateChange}
              value={expirationDate}
            />
          </RegistrationForm>
        )}
      </View>
      <View style={styles.ctaContainer}>
        <Button mode="contained" style={styles.fullWidth} onPress={onSubmit}>
          Add Vehicle
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

export default Registration;
