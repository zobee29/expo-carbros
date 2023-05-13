import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { DriverService } from 'services';
import Button from "components/button";
import TextInput from "components/text-input";
import formStyles from 'styles/form';

const EmergencyContactForm = ({ navigation, route }) => {
    const { id } = route.params;
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");

    const onSubmit = () => {
        const data = {
            emergency_contact_name: name,
            emergency_contact_phone_number: phoneNumber,
            emergency_contact_email: email,
        }

        DriverService.update(id, data).then((driver) => {
            navigation.navigate("Assign Vehicle", { id: id });
        })
    }

    return (
        <View style={formStyles.container}>
            <View style={formStyles.inputContainer}>
                <TextInput
                    label="Name"
                    placeholder="Name"
                    value={name}
                    onChangeText={setName}
                    autoCapitalize="words"
                    autoCompleteType="name"
                />
                <TextInput
                    label="Phone Number"
                    placeholder="(123) 456-7890"
                    value={phoneNumber}
                    onChangeText={setPhoneNumber}
                />
                <TextInput
                    label="Email"
                    placeholder="first.last@example.com"
                    value={email}
                    onChangeText={setEmail}
                />
            </View>
            <View style={formStyles.ctaContainer}>
                <Button mode="contained" style={formStyles.fullWidth} onPress={onSubmit}>
                    Continue to Assign Vehicle
                </Button>
            </View>
        </View>
    );
}

export default EmergencyContactForm;