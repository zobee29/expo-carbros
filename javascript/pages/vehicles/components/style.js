import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    minHeight: '48px',
    flexDirection: "column",
    alignItems: "flex-start",
    fontSize: '14px',
    gap: '4px',
    border: '1px solid #E6E6E6',
    borderRadius: '4px',
    padding: '8px',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
  },
  titleContainer: {
    display: 'inline-flex',
    flexDirection: 'row',
  },
  title: {
    fontSize: '16px',
  },
  titleDetail: {
    fontSize: '16px',
    color: '#5C5F5F',
  },
  status: {
    fontSize: '12px',
    color: '#5C5F5F',
  },
  statusContainer: {
    display: 'inline-flex',
    flexDirection: 'row',
    marginLeft: '8px',
    alignItems: 'center',
    gap: '4px'
  },
  upcomingContainer: {
    display: 'inline-flex',
    flexDirection: 'row',
    marginLeft: '8px',
    alignItems: 'baseline',
    gap: '4px'
  },
  upcoming: {
    fontWeight: 'bold',
  }
});

export default styles;