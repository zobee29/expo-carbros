// @flow
import { createContext } from 'react'

type ContextType = {app: *, analytics: *, auth: *}

export const FirebaseContext : React$Context<ContextType> = createContext({ app: null, analytics: null, auth: null})