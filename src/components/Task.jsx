import React from 'react'

export const Task = ({Title,description, deleteTask, index}) => {
  return (
    <div className='Task'>

<div>
    <p>{Title}</p>
    <span>{description}</span>
</div>
<button onClick={()=>deleteTask(index)}>.</button>
    </div>
  )
}
