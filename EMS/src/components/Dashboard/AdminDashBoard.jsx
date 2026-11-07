import React from 'react'
import Header from '../EmpDashBoardElements/Header'
import CreateTask from '../AdminDashboardElements/CreateTask'
import AssignedTask from '../AdminDashboardElements/AssignedTask'

const AdminDashBoard = (props) => {
  return (
    <div className='h-screen w-full'>
      <Header data={props.data} changeUser={props.changeUser} />
      <CreateTask/>
      <AssignedTask />
    </div>
  )
}

export default AdminDashBoard
