import { createContext } from 'react'

export const FirebaseContext = createContext({ app: null, analytics: null, auth: null})