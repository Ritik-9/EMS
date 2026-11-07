import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/Context'

const CreateTask = () => {

  const [authData,setUserData]= useContext(AuthContext)
  
  const[taskTitle,setTaskTitle]=useState("")
  const[taskDate,setTaskDate]=useState("")
  const[assignTo,setAssignTo]=useState("")
  const[category,setCategory]=useState("")
  const[taskDescription,setTaskDescription]=useState("")



  const submitHandler=(e)=>{
    e.preventDefault()
    const newTask={taskTitle,taskDescription,taskDate,category,active:false,newTask:true,completed:false,failed:false}
    const data=authData.employees 
    data.forEach((elem)=>{
      if(elem.firstName===assignTo){
        elem.tasks.push(newTask)
        elem.taskCounts.newTask=elem.taskCounts.newTask+1
      }
    })
    localStorage.setItem("employees",JSON.stringify(data))
    setUserData({employees: data})
    setTaskTitle("")
    setTaskDescription("")
    setTaskDate("")
    setCategory("")
    setAssignTo("")
  }



  return (
    <div className='px-10 py-3'>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }} className='flex justify-between items-center bg-[#1c1c1c] px-15 py-3 rounded-2xl'>
        <div className='h-full w-1/2'>
            <h3>Task Title</h3>
            <input onChange={(e)=>{
              setTaskTitle(e.target.value)
            }} value={taskTitle} className='text-sm text-white border-amber-25 border px-2 py-1 rounded-xl mt-1 mb-2 h-9 w-4/5' type='text' placeholder='Enter Title'></input>
            <h3>Date</h3>
            <input onChange={(e)=>{
              setTaskDate(e.target.value)
            }} value={taskDate} className='text-sm text-white border-amber-25 border px-2 py-1 rounded-xl mt-1 mb-2 w-4/5' type='date'></input>
            <h3>Assign To</h3>
            <input onChange={(e)=>{
              setAssignTo(e.target.value)
            }} value={assignTo} className='text-sm text-white border-amber-25 border px-2 py-1 rounded-xl mt-1 mb-2 w-4/5 h-9' type='text'></input>
            <h3>Category</h3>
            <input onChange={(e)=>{
              setCategory(e.target.value)
            }} value={category} className='text-sm text-white border-amber-25 border px-2 py-1 rounded-xl mt-1 mb-2 w-4/5 h-9' type='text' placeholder='Design,Development,etc..'></input>
        </div>
        <div className='h-full w-1/2 flex flex-col items-start px-30 py-5'>
            <h3 className='text-sm mb-2'>Description</h3>
            <textarea onChange={(e)=>{
              setTaskDescription(e.target.value)
            }} value={taskDescription} className='border-amber-50 border text-sm text-white px-2 py-1 rounded-xl mb-1 h-55 w-full' placeholder='Detailed Description'></textarea>
            <button className='bg-emerald-400 text-center rounded-2xl w-full h-10 mt-2 text-xl'>Create Task</button>
        </div>
      </form>
    </div>
  )
}

export default CreateTask
