import React from "react";
import { ScrollView, View, Text } from "react-native";
import styles from "../style";
import Switch from "components/switch";
import TextInput from "components/text-input";
import Button from "components/button";
import styled from "styled-components/native";
import dayjs from "dayjs";
import { theme } from "theme";

const InspectionCtaContainer = styled.View`
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

const InspectionContainer = styled.View`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  padding: 10px;
  margin-top: 16px;
  border: 1px solid ${theme.colors.border};
`;

const InspectionForm = styled.View`
  width: 100%;
`;

const InspectionUploadButton = styled.TouchableOpacity`
  height: 24px;
  background-color: ${theme.colors.primary};
  color: white;
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const InspectionButtonText = styled.Text`
  color: white;
  font-size: 9px;
  width: 50px;
  padding-bottom: 2px;
`;

const InspectionStatus = ({ navigation }) => {
  const [isInspected, setIsInspected] = React.useState(false);
  const [inspectionDocument, setInspectionDocument] = React.useState();
  const [expirationDate, setExpirationDate] = React.useState("");

  const hasValidExpirationDate = () => {
    return expirationDate.length === 8;
  };

  const handleLicensePlateNumberChange = (event) => {
    let text = event.target.value;
    if (text.length > 6) return;
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

  const onSubmit = () => {
    console.log("TO-DO: Submit inspection form");
    navigation.navigate("Availability Status");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.inputContainer}>
        <Switch
          label="Inspection Completed"
          onValueChange={setIsInspected}
          value={isInspected}
        />
        {isInspected && (
          <InspectionForm>
            <InspectionContainer>
              <InspectionCtaContainer>
                <Text>Inspection Document</Text>
                <label for="inspection">
                  <InspectionUploadButton>
                    <InspectionButtonText>Upload</InspectionButtonText>
                  </InspectionUploadButton>
                </label>
                <input
                  type="file"
                  id="inspection"
                  style={{ display: "none" }}
                  onChange={(e) => setInspectionDocument(e.target.files[0])}
                />
              </InspectionCtaContainer>
              {inspectionDocument && (
                <UploadedFileContainer>
                  <Text style={{ fontSize: "11px" }}>
                    Uploaded on:{" "}
                    {dayjs(inspectionDocument.lastModifiedDate).format(
                      "MM/DD/YYYY"
                    )}
                  </Text>
                  <Text style={{ fontSize: "9px" }}>
                    {inspectionDocument.name}
                  </Text>
                </UploadedFileContainer>
              )}
            </InspectionContainer>
            <TextInput
              label="Expiration Date"
              placeholder="MM/DD/YY"
              onChange={handleExpirationDateChange}
              value={expirationDate}
            />
          </InspectionForm>
        )}
      </View>
      <View style={styles.ctaContainer}>
        <Button
          mode="contained"
          style={styles.fullWidth}
          onPress={onSubmit}
          disabled={!hasValidExpirationDate}
        >
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
    </ScrollView>
  );
};

export default InspectionStatus;
