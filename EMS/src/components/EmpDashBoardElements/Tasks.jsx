import React from 'react'
import AcceptTask from '../TaskList/AcceptTask'
import CompleteTask from '../TaskList/CompleteTask'
import FailedTask from '../TaskList/FailedTask'
import NewTask from '../TaskList/NewTask'

const Tasks = ({data}) => {
  return (
    <div className='mt-7'>
      <div className='px-9'>
        <h2 className="text-3xl font-semibold mb-6">
          Task's Information :-
        </h2>
      </div>
      <div id='task' className='overflow-x-auto flex gap-4 flex-nowrap h-[40%] mt-5 px-9 py-2'>
        {data.tasks.map((elem,id)=>{
          if (elem.active){
            return <AcceptTask key={id} data={elem} org={data}/>
          }
          if (elem.completed){
            return <CompleteTask key={id} data={elem} org={data}/>
          }
          if (elem.newTask){
            return <NewTask key={id} data={elem} org={data}/>
          }
          if (elem.failed){
            return <FailedTask key={id} data={elem} org={data}/>
          }
        })}
      </div>
    </div>
  )
}

export default Tasks
