import { isStudentUpdated } from "staff-app/utils"

export const stateReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_SORT_USERS_SWITCH":
      return {
        ...state,
        sort: { ...state.sort, applied: !state.sort.applied },
      }

    case "TOGGLE_SORT_FILTER_NAME":
      return {
        ...state,
        sort: { ...state.sort, firstName: !state.sort.firstName },
      }

    case "SORT_BY_ORDER":
      return {
        ...state,
        sort: { ...state.sort, ascending: !state.sort.ascending },
      }

    case "SEARCH_USERS":
      return {
        ...state,
        searchedString: action.payload,
      }

    case "TOGGLE_USER_ROLL":
      return { ...state, isRollMode: action.payload }

    case "UPDATE_STUDENTS_ROLL":
      const newStudent = action.payload
      const existingStudentRolls = state.updatedStudentRolls

      const latestChanges = isStudentUpdated(existingStudentRolls, newStudent)
        ? existingStudentRolls.map((studentObj) => (studentObj.id === newStudent.id ? { ...newStudent } : { ...studentObj }))
        : existingStudentRolls.concat(action.payload)
      return {
        ...state,
        updatedStudentRolls: latestChanges,
      }

    case "UPDATE_STUDENT_WITHOUT_ROLE":
      return {
        ...state,
        updatedStudentRolls: state.updatedStudentRolls.concat(action.payload.map((stuObj) => ({ ...stuObj, type: "unmark" }))),
      }

    case "FILTER_STUDENT_ROLE":
      return {
        ...state,
        filterType: action.payload,
      }

    default:
      return state
  }
}
