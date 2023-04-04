import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import FirebaseProvider from './javascript/firebase/firebase-provider';
import FirestoreProvider from './javascript/firestore/firestore-provider';
import DataStoreProvider from './javascript/datastore/datastore-provider';

export default function App() {
  return (
    <FirebaseProvider>
      <FirestoreProvider>
        <DataStoreProvider>
        <View style={styles.container}>
          <Text>Open up App.js to start working on your app!</Text>
          <StatusBar style="auto" />
        </View>
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
  },
});
