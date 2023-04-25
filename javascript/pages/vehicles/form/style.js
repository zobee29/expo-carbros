import { StyleSheet } from "react-native";
import { theme } from 'theme';

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: 'white',
    height: '100%',
    padding: '16px',
    width: '100%',
  },
  inputContainer: {
    display: 'flex',
    flexDirection: "column",
    alignItems: "center",
  },
  ctaContainer: {
    display: 'flex',
    flexDirection: "column",
    alignItems: "center",
    justifyContent: 'center',
    width: '100%',
    paddingBottom: 15
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