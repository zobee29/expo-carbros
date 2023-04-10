import React from "react";
import { Text } from "react-native";
import { theme } from "theme";
import { StyledSwitch, StyledSwitchContainer } from "./style";

const SwitchComponent = ({ label, value, onValueChange }) => {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  return (
    <StyledSwitchContainer>
      <Text>{label}</Text>
      <StyledSwitch
        trackColor={{
          true: theme.colors.primary,
          false: "gray",
        }}
        value={value}
        onValueChange={onValueChange}
      />
    </StyledSwitchContainer>
  );
};

export default SwitchComponent;
