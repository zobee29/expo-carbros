import { Button } from "react-native-paper";
import styled from "styled-components/native";
import { theme } from "theme";

const CustomButton = styled(Button)`
  background-color: ${(props) => theme.colors.primary};
  color: white;
  border-radius: 100px;
  width: 100%;
  height: 40px;
  margin-top: 16px;
`;

export default CustomButton;
