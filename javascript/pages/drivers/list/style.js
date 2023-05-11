import { theme } from 'theme'
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        backgroundColor: 'white',
        height: '100%',
        paddingBottom: '60px'
    },
    content: {
        padding: '16px',
        backgroundColor: "#fff",
        height: "100%",
        gap: '12px',
    },
    title: {
        fontSize: '20px',
        fontWeight: 'bold',
    },
    item: {
        backgroundColor: theme.colors.elevation.level1,
        padding: '16px',
        marginBottom: '12px',
        borderRadius: '4px'
    }
});