import React from "react"
import { Grid } from "@material-ui/core"
import { Colors } from "shared/styles/colors"
import TextField from "@material-ui/core/TextField"
import { useStaffContext } from "staff-app/context/state-context"

export const Search = () => {
  const {
    state: { searchedString },
    dispatch,
  } = useStaffContext()

  return (
    <>
      <>
        <Grid alignItems="center">
          <Grid item>
            <TextField
              multiline
              rowsMax={1}
              size="small"
              type="search"
              value={searchedString}
              label="Search User"
              variant="filled"
              fullWidth={false}
              onChange={(e) => dispatch({ type: "SEARCH_USERS", payload: e.target.value })}
              InputProps={{ style: { backgroundColor: `${Colors.neutral.lighter}` } }}
            />
          </Grid>
        </Grid>
      </>
    </>
  )
}