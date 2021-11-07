import React from "react"
import styled from "styled-components"
import { FontSize, Spacing } from "shared/styles/styles"
import FormGroup from "@material-ui/core/FormGroup"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Switch from "@material-ui/core/Switch"
import { useStaffContext } from "../../context/state-context"

export const Sort = () => {
  const {
    dispatch,
    state: {
      sort: { applied, firstName, ascending },
    },
  } = useStaffContext()

  return (
    <S.SortContainer>
      <FormControlLabel
        style={{ marginLeft: 0 }}
        control={<Switch checked={applied} onChange={() => dispatch({ type: "TOGGLE_SORT_USERS_SWITCH" })} name="Sort By User Name Filter" />}
        label="Sort by User"
        labelPlacement="start"
      />
      {applied && (
        <FormGroup row>
          <FormControlLabel
            control={<Switch size="small" checked={firstName} onChange={() => dispatch({ type: "TOGGLE_SORT_FILTER_NAME" })} name="Sorting by name type" />}
            label={firstName ? "First Name" : "Last Name"}
          />
          <FormControlLabel
            control={<Switch size="small" checked={ascending} onChange={() => dispatch({ type: "SORT_BY_ORDER" })} name="Sorting order" />}
            label={ascending ? "Ascending" : "Descending"}
          />
        </FormGroup>
      )}
    </S.SortContainer>
  )
}

const S = {
  SortContainer: styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    font-size: ${FontSize.u2};
    padding: 0 ${Spacing.u5} 0 ${Spacing.u2};
    gap: ${Spacing.u1};
  `,
}
