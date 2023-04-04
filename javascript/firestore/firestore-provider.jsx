import React from "react";
import { getFirestore } from "firebase/firestore";
import { FirestoreContext } from "./firestore-context";
import { app } from "../firebase/firebase-provider";

export const db = getFirestore(app);

const FirestoreProvider = ({ children }) => {
  return (
    <FirestoreContext.Provider value={{ db }}>
      {children}
    </FirestoreContext.Provider>
  );
};

export default FirestoreProvider;
