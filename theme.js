import { DefaultTheme } from 'react-native-paper';

export const theme = {
  // ...MD3LightTheme, // or MD3DarkTheme
  ...DefaultTheme,
  roundness: 4,
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
    onBackground: '#181c1c',
    onSurface: '#191C1C',
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