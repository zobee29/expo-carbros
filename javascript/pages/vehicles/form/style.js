import { StyleSheet } from "react-native";
import { theme } from 'theme';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: '100%',
    flexDirection: "column",
    alignItems: "center",
    padding: '8px',
    width: '100%',
  },
  fullWidth: {
    width: '95vw'
  },
  input: {
    marginTop: '8px',
    marginBottom: '8px',
  },
  inputError: {
    border: `1px solid ${theme.colors.error}`,
  },
  select: {
    width: '100%',
    justifyContent: 'center',
  }
});

export default styles