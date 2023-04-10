import React from "react";
import { View, TextInput, Text } from "react-native";
import styled from "styled-components/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const CustomTextInput = (props) => {
  const { label, error, icon } = props;

  return (
    <Container error={error}>
      {!!label && (
        <Label>
          <LabelText>{label}</LabelText>
        </Label>
      )}
      <Input {...props} />
      {icon && <MaterialCommunityIcons name={icon} size={24} />}
    </Container>
  );
};

export default CustomTextInput;

const Container = styled.View`
  border: 1px solid;
  border-color: ${(props) => (props.error ? "red" : "black")};
  border-radius: 4px;
  background-color: white;
  margin-bottom: 16px;
  margin-top: 16px;
  width: 100%;
`;

const Input = styled.TextInput`
  padding: 16px;
  font-size: 16px;
  selectioncolor: transparent;
`;

const Label = styled.View`
  position: absolute;
  top: -10px;
  left: 16px;
  background-color: inherit;
`;

const LabelText = styled.Text`
  color: black;
  padding-left: 4px;
  padding-right: 4px;
  font-size: 14px;
`;
