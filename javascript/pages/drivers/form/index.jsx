import React, { useState } from 'react';
import { View } from 'react-native';
import TextInput from "components/text-input";
import style from 'pages/style';



const AddDrivers = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");

    return (
        <View style={style.container}>
            <View style={style.content}>
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
        </View>
    );
}

export default AddDrivers;