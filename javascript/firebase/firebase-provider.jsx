import React from "react";
import { FirebaseContext } from "./firebase-context";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYXrCxXXI5gWfVeA_9srDTCDX48B1ur_c",
  authDomain: "carbros-a50f6.firebaseapp.com",
  databaseURL: "https://carbros-a50f6-default-rtdb.firebaseio.com",
  projectId: "carbros-a50f6",
  storageBucket: "carbros-a50f6.appspot.com",
  messagingSenderId: "440598771493",
  appId: "1:440598771493:web:f696a11cdfb77109b4cccc",
  measurementId: "G-5MX70GMQXT",
};

// Initialize Firebase
const app: * = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

const FirebaseProvider = ({ children }) => {
  return (
    <FirebaseContext.Provider value={{ app, analytics, auth }}>
      {children}
    </FirebaseContext.Provider>
  );
};

export { app };

export default FirebaseProvider;
