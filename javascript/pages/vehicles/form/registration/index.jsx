import React from "react";
import { View, Text } from "react-native";
import styles from "../style";
import Switch from "components/switch";
import TextInput from "components/text-input";
import styled from "styled-components/native";
import { theme } from "theme";

const RegistrationDocument = styled.View`
  padding: 10px;
  margin-top: 16px;
  border-radius: 4px;
  border: 1px solid ${theme.colors.border};
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
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
`;

const Registration = () => {
  const [isRegistered, setIsRegistered] = React.useState(false);
  const [registrationDocument, setRegistrationDocument] = React.useState("");
  const [licensePlateNumber, setLicensePlateNumber] = React.useState("");
  const [expirationDate, setExpirationDate] = React.useState("");

  const hasValidLicensePlateNumber = () => {
    return licensePlateNumber.length === 6;
  };

  const hasValidExpirationDate = () => {
    return expirationDate.length === 8;
  };

  const handleLicensePlateNumberChange = (text) => {
    setLicensePlateNumber(text);
  };

  const handleExpirationDateChange = (text) => {
    setExpirationDate(text);
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
            <RegistrationDocument>
              <Text>Registration Document</Text>
              <RegistrationUploadButton>
                <RegistrationButtonText>Upload</RegistrationButtonText>
              </RegistrationUploadButton>
            </RegistrationDocument>
            <TextInput label="License Plate Number" placeholder="XXXXXX" />
            <TextInput label="Expiration Date" placeholder="MM/DD/YY" />
          </RegistrationForm>
        )}
      </View>
    </View>
  );
};

export default Registration;
