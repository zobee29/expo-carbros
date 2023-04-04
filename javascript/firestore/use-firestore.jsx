import { useContext } from "react";
import { FirestoreContext } from "./firestore-context";

export const useFirestore = () => {
  const { db } = useContext(FirestoreContext);

  return { db };
};
