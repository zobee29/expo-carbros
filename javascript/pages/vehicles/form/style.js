import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: '100%',
    flexDirection: "column",
    alignItems: "flex-start",
    gap: '8px',
    padding: '8px'
  },
  input: {
    width: '100%',
    height: '40px',
    padding: '8px',
    border: '1px solid #ccc',
  },
  select: {
    width: '100%',
    height: '40px',
    justifyContent: 'center',
  }
});

export default styles