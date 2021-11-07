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

    default:
      return state
  }
}