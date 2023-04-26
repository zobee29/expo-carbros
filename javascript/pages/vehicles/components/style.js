import { StyleSheet } from "react-native";
import { theme } from 'theme';

const styles = StyleSheet.create({
  container: {
    minHeight: '48px',
    flexDirection: "column",
    alignItems: "flex-start",
    fontSize: '14px',
    gap: '4px',
    padding: '8px',
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