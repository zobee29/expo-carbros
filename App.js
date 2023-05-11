import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import FirebaseProvider from './javascript/firebase/firebase-provider';
import FirestoreProvider from './javascript/firestore/firestore-provider';
import DataStoreProvider from 'datastore/datastore-provider';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer, getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { theme } from 'theme'
import { Dashboard, Drivers, Vehicles } from 'pages'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

const HideTabBarRoutes = ["Add Vehicle", "Registration", "Tracker Status", "Inspection Status", "Availability Status"];

export default function App() {
  return (
    <FirebaseProvider>
      <FirestoreProvider>
        <DataStoreProvider>
          <PaperProvider theme={theme}
            settings={{
              icon: props => <MaterialCommunityIcons name={props.icon} {...props} />,
            }}
          >
            <NavigationContainer>
              <Tab.Navigator
              initialRouteName={"Vehicles"}
                screenOptions={({route}) => {
                  const hideTab = HideTabBarRoutes.includes(getFocusedRouteNameFromRoute(route));
                  return({
                  tabBarStyle: {backgroundColor: '#DAE4E4', minHeight: '72px', paddingBottom: '12px', display: 'flex', justifyContent: 'center', alignItems: 'space-evenly', display: hideTab ? 'none' : 'flex'},
                })}}
              >
                <Tab.Screen name="Dashboard"
                  options={{
                    tabBarIcon: ({ focused, color, size }) => (
                      <MaterialCommunityIcons name="view-dashboard" color={focused ? theme.colors.primary : color} size={size} />
                    ),
                  }}
                component={Dashboard} />
                <Tab.Screen name="Drivers"
                options={{
                  headerShown: false,
                  tabBarIcon: ({ focused, color, size }) => (
                    <MaterialCommunityIcons name="contacts" color={focused ? theme.colors.primary : color} size={size} />
                  ),
                }}
                component={Drivers} />
                <Tab.Screen name="Vehicles"
                options={{
                  headerShown: false,
                  tabBarIcon: ({ focused, color, size }) => (
                    <MaterialCommunityIcons name="car" color={focused ? theme.colors.primary : color} size={size} />
                  ),
                }} component={Vehicles} />
              </Tab.Navigator>
            </NavigationContainer>
        </PaperProvider>
        </DataStoreProvider>
      </FirestoreProvider>
    </FirebaseProvider>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.background,
    color: theme.colors.onBackground,
  }
});
