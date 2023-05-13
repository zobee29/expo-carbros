import { DefaultTheme } from 'react-native-paper';

export const theme = {
  // ...MD3LightTheme, // or MD3DarkTheme
  ...DefaultTheme,
  roundness: 4,
  typography: {
    fontFamily: 'Inter',
    display1: {
      fontFamily: 'Inter',
      fontSize: 72,
      fontWeight: 600,
    },
    display2: {
      fontFamily: 'Inter',
      fontSize: 60,
      fontWeight: 600,
    },
    h1: {
      fontFamily: 'Inter',
      fontSize: 48,
      fontWeight: 600,
    },
    h2: {
      fontFamily: 'Inter',
      fontSize: 39,
      fontWeight: 600,
    },
    h3: {
      fontFamily: 'Inter',
      fontSize: 33,
      fontWeight: 600,
    },
    h4: {
      fontFamily: 'Inter',
      fontSize: 28,
      fontWeight: 600,
    },
    h5: {
      fontFamily: 'Inter',
      fontSize: 23,
      fontWeight: 600,
    },
    h6: {
      fontFamily: 'Inter',
      fontSize: 19,
      fontWeight: 600,
    },
    subheading: {
      fontFamily: 'Inter',
      fontSize: 20,
      fontWeight: 400,
    },
    p1: {
      fontFamily: 'Inter',
      fontSize: 14,
      fontWeight: 400,
    },
    p2: {
      fontFamily: 'Inter',
      fontSize: 16,
      fontWeight: 400,
    },
    p3: {
      fontFamily: 'Inter',
      fontSize: 18,
      fontWeight: 400,
    },
    caption: {
      fontFamily: 'Inter',
      fontSize: 12,
      fontWeight: 400,
    },
    footer: {
      fontFamily: 'Inter',
      fontSize: 10,
      fontWeight: 400,
    },
  },
  colors: {
    // ...MD3LightTheme.colors,
    ...DefaultTheme.colors,
    error: '#BA1A1A',
    errorContainer: '#ffdad6',
    primary: '#00696D',
    primaryContainer: '#70f6fc',
    onPrimaryContainer: '#002021',
    secondary: '#4A6364',
    secondaryContainer: '#CCE8E9',
    onSecondaryContainer: '#041F20',
    accent: '#4A6364',
    background: '#FAFDFC',
    surface: '#FAFDFC',
    surfaceVariant: '#DAE4E4',
    onBackground: '#181c1c',
    onSurface: '#191C1C',
    onSurfaceVariant: '#3F4949',
    tertiaryContainer: '#d4e3ff',
    border: '#79747E',
    elevation: {
      level0: 'transparent',
      level1: '#EEF6F5',
      level2: '#E6F1F0',
      level3: '#DFEDEC',
      level4: '#DCEBEB',
      level5: '#D7E8E8',
    }
  },
};