import { StyleSheet } from "react-native";
import { theme } from "../../theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    backgroundColor: theme.colors.background,
    color: theme.colors.onBackground,
    padding: '16px',
    gap: '12px'
  },
});

export default styles