import React from "react";
import Typography from "components/typography";
import { theme } from "theme";
import { StyledSwitch, StyledSwitchContainer } from "./style";

const SwitchComponent = ({ label, value, onValueChange }) => {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  return (
    <StyledSwitchContainer>
      <Typography variant={"p1"}>{label}</Typography>
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
