export const getFilteredStudents = (updatedStudents, state) => {
    console.log(updatedStudents, "from utils current student data")
    console.log(state.filterType, "from utils filterType")
    if(state.filterType === "all") {return updatedStudents;}
    else {return (updatedStudents.filter((stuObj) => stuObj.type == state.filterType))}
  }
  