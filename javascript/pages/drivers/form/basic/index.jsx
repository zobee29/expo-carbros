import React, { useState } from 'react';
import { Text, View } from 'react-native';
import TextInput from "components/text-input";
import Button from "components/button";
import formStyles from 'styles/form';
import { DriverService } from 'services';

const DriverForm = ({ navigation, route }) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");

    const onSubmit = () => {
        const data = {
            first_name: firstName,
            last_name: lastName,
            phone_number: phoneNumber,
            email: email,
        }

        DriverService.create(data).then((driver) => {
            navigation.navigate("Emergency Contact", { id: driver.id });
        })
    }

    return (
        <View style={formStyles.container}>
            <View style={formStyles.inputContainer}>
                <TextInput
                    label="First Name"
                    placeholder="First Name"
                    value={firstName}
                    onChangeText={setFirstName}
                    autoCapitalize="words"
                    autoCompleteType="given-name"
                />
                <TextInput
                    label="Last Name"
                    placeholder="Last Name"
                    value={lastName}
                    onChangeText={setLastName}
                    autoCapitalize="words"
                    autoCompleteType="family-name"
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
                    Continue to Emergency Contact
                </Button>
            </View>
        </View>
    );
}

export default DriverForm;