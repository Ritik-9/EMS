import Header from "../EmpDashBoardElements/Header"
import Tasks from "../EmpDashBoardElements/Tasks"
import TaskStatus from "../EmpDashBoardElements/TaskStatus"


const EmployeeDashboard = (props) => {
  return (
    <div className='h-screen'>
        <Header changeUser={props.changeUser} data={props.data} />
        <TaskStatus data={props.data} />
        <Tasks data={props.data} />
    </div>
  )
}

export default EmployeeDashboard
