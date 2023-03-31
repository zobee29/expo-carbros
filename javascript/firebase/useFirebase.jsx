// @flow
import { useContext } from "react";
import { FirebaseContext } from "./FirebaseContext";

export const useFirebase = (): { app: *, analytics: *, auth: * } => {
  const { app, analytics, auth } = useContext(FirebaseContext);

  return { app, analytics, auth };
};
