import React from "react"
import { Person } from "shared/models/person"
import { RolllStateType } from "shared/models/roll"
import { RollStateIcon } from "staff-app/components/roll-state/roll-state-icon.component"
import { useStaffContext } from "staff-app/context/state-context"

interface Props {
  size?: number
  student: Person
}
export const RollStateSwitcher: React.FC<Props> = ({ student, size = 40 }) => {
  const {
    state: { updatedStudentRolls },
    dispatch,
  } = useStaffContext()

  const rollState = updatedStudentRolls.find((stuObj: any) => stuObj?.id === student?.id)?.type

  const nextState = () => {
    const states: RolllStateType[] = ["present", "late", "absent"]

    if (rollState === "unmark" || rollState === "absent") return states[0]

    const matchingIndex = states.findIndex((s) => s === rollState)
    return matchingIndex > -1 ? states[matchingIndex + 1] : states[0]
  }

  const onClick = () => dispatch({ type: "UPDATE_STUDENTS_ROLL", payload: { ...student, type: nextState() } })

  return <RollStateIcon type={rollState} size={size} onClick={onClick} />
}
