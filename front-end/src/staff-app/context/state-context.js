import React, { createContext, useContext, useReducer } from "react"
import { stateReducer } from "staff-app/reducer/state-reducer"

// Initial State Values
const initialState = {
  sort: {
    applied: false,
    firstName: false,
    ascending: false,
  }
}

// State Context
const StaffContext = createContext()

// State Context Provider
export const StaffProvider = ({ children }) => {
  const [state, dispatch] = useReducer(stateReducer, initialState)

  return <StaffContext.Provider value={{ state, dispatch }}>{children}</StaffContext.Provider>
}

// State Context Hook
export const useStaffContext = () => useContext(StaffContext)