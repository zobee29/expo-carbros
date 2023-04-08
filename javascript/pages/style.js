import { StyleSheet } from "react-native";
import { theme } from "theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    backgroundColor: theme.colors.background,
    color: theme.colors.onBackground,
  },
  content: {
    padding: '16px',
    backgroundColor: "#fff",
    height: "100%",
  }
});

export default styles