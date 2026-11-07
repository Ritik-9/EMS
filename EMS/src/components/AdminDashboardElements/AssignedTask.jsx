import React, { useContext } from 'react'
import { AuthContext } from '../../context/Context'

const AssignedTask = () => {
    const [authData,setUserData]= useContext(AuthContext)
    return (
        <div className='px-10 py-3'>
            <div className='bg-[#1c1c1c] mt-5 px-15 py-2 rounded-2xl'>
                <div className='flex justify-between items-center  bg-yellow-400 px-5 py-2 mt-2 rounded-xl mb-3'>
                    <h3 className='w-1/5 text-center font-bold text-xl text-gray-700'>Name</h3>
                    <h3 className='w-1/5 text-center font-bold text-xl text-gray-700'>New Task</h3>
                    <h3 className='w-1/5 text-center font-bold text-xl text-gray-700'>Active Task</h3>
                    <h3 className='w-1/5 text-center font-bold text-xl text-gray-700'>Completed Task</h3>
                    <h3 className='w-1/5 text-center font-bold text-xl text-gray-700'>Failed Task</h3>
                </div>  
            <div id='task' className='text-lg flex flex-col flex-nowrap h-40 overflow-auto'>
                {authData.employees.map((elem,idx)=>{
                    return(
                        <div key={idx} className='flex justify-between items-center border-2 border-emerald-400 px-5  py-1 rounded-xl mb-3'>
                            <h3 className='w-1/5 text-center font-serif'>{elem.firstName}</h3>
                            <h3 className='w-1/5 text-center text-sky-400 font-mono'>{elem.taskCounts.newTask}</h3>
                            <h3 className='w-1/5 text-center text-amber-400 font-mono'>{elem.taskCounts.active}</h3>
                            <h3 className='w-1/5 text-center text-lime-400 font-mono'>{elem.taskCounts.completed}</h3>
                            <h3 className='w-1/5 text-center text-red-400 font-mono'>{elem.taskCounts.failed}</h3>
                        </div>
                    )
                })}
            </div>
            </div>
        </div>
    )
}

export default AssignedTask
