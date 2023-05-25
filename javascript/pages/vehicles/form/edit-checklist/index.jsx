import React from 'react';
import styled from 'styled-components/native';
import { View } from 'react-native';
import Typography from 'components/typography';
import Switch from "components/switch";
import { IconButton } from "react-native-paper";
import { theme } from 'theme';

const EditButton = ({ onPress }) => (
        <IconButton
            size={24}
            onPress={onPress}
            style={{  color: theme.colors.primary }}
            icon="chevron-right"
            />);


const EditChecklist = ({ route, navigation }) => {
    const { vehicle } = route.params;

    return (
        <ChecklistContainer>
            <ChecklistItemContainer>
                <ChecklistItemHeader>
                    <View>
                        <ChecklistTitle>Basic</ChecklistTitle>
                    </View>
                    <EditButton onPress={() => navigation.navigate("Add Vehicle", { vehicle })} />
                </ChecklistItemHeader>
                <ChecklistInfo>
                    <Typography>Make: <strong>{vehicle?.make}</strong></Typography>
                    <Typography>Model: <strong>{vehicle?.model}</strong></Typography>
                    <Typography>Year: <strong>{vehicle?.year}</strong></Typography>
                    <Typography>Color: <strong>{vehicle?.color}</strong></Typography>
                    <Typography>VIN: <strong>{vehicle?.vin}</strong></Typography>
                </ChecklistInfo>
            </ChecklistItemContainer>
            <ChecklistItemContainer>
            <ChecklistItemHeader>
                <View>
                    <ChecklistTitle>Registration</ChecklistTitle>
                </View>
                <EditButton onPress={() => navigation.navigate("Registration", { vehicle })} />
                </ChecklistItemHeader>
                <ChecklistInfo>
                    <Typography>Registered: <strong>{vehicle?.is_registered ? 'Is Registered' : 'Is Not Registered'}</strong></Typography>
                    <Typography>License Plate Number: <strong>{vehicle?.license_plate_number}</strong></Typography>
                    <Typography>Expires At: <strong>{vehicle?.registration_expiration_date}</strong></Typography>
                    <Typography>Uploaded At: <strong>{"TO-DO"}</strong></Typography>
                </ChecklistInfo>
            </ChecklistItemContainer>
            <ChecklistItemContainer>
            <ChecklistItemHeader>
                <View>
                    <ChecklistTitle>Tracker Status</ChecklistTitle>
                </View>
                <EditButton onPress={() => navigation.navigate("Tracker Status", { vehicle })} />
                </ChecklistItemHeader>
                <ChecklistInfo>
                    <Typography>Tracking: <strong>{vehicle?.is_tracking ? "Is Tracking" : "Is Not Tracking"}</strong></Typography>
                </ChecklistInfo>
            </ChecklistItemContainer>
            <ChecklistItemContainer>
            <ChecklistItemHeader>
                <View>
                    <ChecklistTitle>Inspection</ChecklistTitle>
                </View>
                <EditButton onPress={() => navigation.navigate("Inspection Status", { vehicle })} />
                </ChecklistItemHeader>
                <ChecklistInfo>
                    <Typography>Inspected: <strong>{vehicle?.is_inspected ? "Is Inspected" : "Is Not Inspected"}</strong></Typography>
                    <Typography>Expires At: <strong>{vehicle?.inspection_expiration_date}</strong></Typography>
                </ChecklistInfo>
            </ChecklistItemContainer>
            <ChecklistItemContainer>
            <ChecklistItemHeader>
                <View>
                    <ChecklistTitle>Availability Status</ChecklistTitle>
                </View>
                <ChecklistInfo>
                    <Typography>Inspected: <strong>{vehicle?.is_inspected ? "Is Inspected" : "Is Not Inspected"}</strong></Typography>
                    <Typography>Expires At: <strong>{vehicle?.inspection_expiration_date}</strong></Typography>
                </ChecklistInfo>
                <EditButton onPress={() => navigation.navigate("Availability Status", { vehicle })} />
            </ChecklistItemHeader>
            </ChecklistItemContainer>
        </ChecklistContainer>
    );
}

const ChecklistContainer = styled.View`
  width: 100%;
  height: 100%;
  background-color: ${theme.colors.background};
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 12px;
`;

const ChecklistItemContainer = styled.View`
  display: flex;
  flex-direction: column; 
  gap: 4px;
  padding: 16px;
  padding-top: 0px;
  padding-right: 8px;
  background-color: ${theme.colors.elevation.level1};
  border-radius: 4px;
`;

const ChecklistItemHeader = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ChecklistTitle = styled(Typography)`
    font-size: 16px;
    font-weight: 500;
    color: ${theme.colors.primary};
`;

const ChecklistInfo = styled.View`
    display: flex;
    flex-direction: column;
    gap: 4px;
`;

export default EditChecklist;
