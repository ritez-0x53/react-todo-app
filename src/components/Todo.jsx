import React from 'react'
import "./Style.css"

function Todo({item,index , remove , edit , isEdit , indexOfEditItem }) {
  return (
    <div className='todo-list'>
      <div className='border'>{index+1}</div>
     <div className='text-start content border'>{item}</div>
     {

     isEdit ?  indexOfEditItem === index ? <div className='editing'>editing...</div> : ""    :
     <div className='btn-group'>
          <button className='action-btn btn-red' onClick={() => remove(index)}>DEL</button>

          <button className='action-btn btn-green' onClick={() => edit(index)}>EDIT</button>
     </div> 
     
     }
    </div>
  )
}

export default Todo
