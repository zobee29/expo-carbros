import { initializeApp } from 'firebase/app';

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDYXrCxXXI5gWfVeA_9srDTCDX48B1ur_c",
  authDomain: "carbros-a50f6.firebaseapp.com",
  databaseURL: "https://carbros-a50f6-default-rtdb.firebaseio.com",
  projectId: "carbros-a50f6",
  storageBucket: "carbros-a50f6.appspot.com",
  messagingSenderId: "440598771493",
  appId: "1:440598771493:web:f696a11cdfb77109b4cccc",
  measurementId: "G-5MX70GMQXT"
};

const app = initializeApp(firebaseConfig);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
