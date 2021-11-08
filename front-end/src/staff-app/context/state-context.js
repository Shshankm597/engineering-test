import React, { createContext, useContext, useReducer } from "react"
import { stateReducer } from "staff-app/reducer/state-reducer"

// Initial State Values
const initialState = {
  isRollMode: false,
  searchedString: "",
  sort: {
    applied: false,
    firstName: false,
    ascending: false,
  },
  rollStateList: [{ type: "all" }, { type: "present" }, { type: "late" }, { type: "absent" }],
  updatedStudentRolls: [],
  filterType: "all",
}

// State Context
const StaffContext = createContext()

// State Context Provider
export const StaffProvider = ({ children }) => {
  const [state, dispatch] = useReducer(stateReducer, initialState)

  console.log(state, "state from context")
  return <StaffContext.Provider value={{ state, dispatch }}>{children}</StaffContext.Provider>
}

// State Context Hook
export const useStaffContext = () => useContext(StaffContext)