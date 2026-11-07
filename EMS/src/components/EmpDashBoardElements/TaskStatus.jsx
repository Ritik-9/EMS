import React from 'react'

const TaskStatus = ({data}) => {
  return (
    <div id='task' className='overflow-x-auto flex flex-nowrap gap-4 screen mt-4 px-4 py-2'>
      <div className='flex flex-col shrink-0 bg-[#FACC15] justify-between items-start w-[24%] h-40 px-5 py-4 rounded-2xl'>
        <h2 className='text-3xl font-semibold text-white'>{data.taskCounts.newTask}</h2>
        <h1 className='text-4xl font-semibold text-white'>New Task</h1>
      </div>
      <div className='flex flex-col shrink-0 bg-[#3B82F6] justify-between items-start w-[24%] h-40 px-5 py-4 rounded-2xl'>
        <h2 className='text-3xl font-semibold text-white'>{data.taskCounts.active}</h2>
        <h1 className='text-4xl font-semibold text-white'>Accepted Task</h1>
      </div>
      <div className='flex flex-col shrink-0 bg-[#22C55E] justify-between items-start w-[24%] h-40 px-5 py-4 rounded-2xl'>
        <h2 className='text-3xl font-semibold text-white'>{data.taskCounts.completed}</h2>
        <h1 className='text-4xl font-semibold text-white'>Completed Task</h1>
      </div>
      <div className='flex flex-col shrink-0 bg-[#EF4444] justify-between items-start w-[24%] h-40 px-5 py-4 rounded-2xl'>
        <h2 className='text-3xl font-semibold text-white'>{data.taskCounts.failed}</h2>
        <h1 className='text-4xl font-semibold text-white'>Failed Task</h1>
      </div>
      
    </div>
  )
}

export default TaskStatus
