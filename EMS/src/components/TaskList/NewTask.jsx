import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/Context'

const NewTask = (props) => {
    const[authData,setUserData]=useContext(AuthContext)
    const emp=authData.employees
    const inc=()=>{

        props.org.taskCounts.newTask--;
        props.org.taskCounts.active++;

        props.data.newTask = false;
        props.data.active = true;

        localStorage.setItem('employees',JSON.stringify(emp))

        localStorage.setItem("logInData",JSON.stringify({role: "employee",data: props.org}));

        setUserData({employees:emp})
    }
    return (
        <div className='border-[#3f3f46] border-2 bg-[#1C1C1C] text-white  w-[25%] rounded-2xl shrink-0 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400 hover:scale-95 hover:shadow-lg'>
            <div className='flex justify-between items-center px-3 py-3'>
            <h2 className='bg-red-600 p-1.5 rounded-xl'>{props.data.category}</h2>
            <h2>{props.data.taskDate}</h2>
            </div>
            <h2 className='text-3xl font-semibold px-3 py-2 font-serif'>{props.data.taskTitle}</h2>
            <p className='px-3 py-2 font-sans'>{props.data.taskDescription}</p>
            <div className='flex justify-center items-start flex-col mt-2 px-3 mb-3'>
                <h1 className='py-2 font-mono text-xl  '>Status</h1>
                <span>🟡 New</span>
            </div>
            <div className='flex justify-center items-center px-3 mt-3 mb-3'>
                <button onClick={()=>{
                    inc()
                }} className='bg-blue-700 text-white rounded-xl px-2 py-1 transition-all duration-300 hover:bg-blue-900 hover: cursor-pointer'>Accept</button>
            </div>
        </div>
    )
}

export default NewTask
