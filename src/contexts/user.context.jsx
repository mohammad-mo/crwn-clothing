import { createContext, useReducer, useEffect } from 'react'

import { createAction } from '../utils/reducer/reducer.utils'

import {
  createUserDocumnetFromAuth,
  onAuthStateChangeListener,
} from '../utils/reducer/firebase.config'

// actual value you want to acces
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
})

export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: 'SET_CURRENT_USER',
}

const INITIAL_STATE = {
  currentUser: null,
}

const userReducer = (state, { type, payload }) => {
  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return { ...state, currentUser: payload }
    default:
      throw new Error(`Unhandled type ${type} in userReducer`)
  }
}

export const UserProvider = ({ children }) => {
  const [{ currentUser }, dispatch] = useReducer(userReducer, INITIAL_STATE)

  const setCurrentUser = (user) =>
    dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user))

  useEffect(() => {
    const unsubscribe = onAuthStateChangeListener((user) => {
      if (user) {
        createUserDocumnetFromAuth(user)
      }
      setCurrentUser(user)
    })

    return unsubscribe
  }, [])

  const value = {
    currentUser,
  }

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
