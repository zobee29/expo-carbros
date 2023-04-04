import { useContext } from "react";
import { FirebaseContext } from "./firebase-context";

export const useFirebase = () => {
  const { app, analytics, auth } = useContext(FirebaseContext);

  return { app, analytics, auth };
};
