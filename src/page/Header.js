import React from 'react'

export default function Header(props) {
 
  return (
    <div class="container">
        <h1 className="m-5">Employee Management System</h1>
        <div class="d-flex">
        <button className='btn btn-primary mb-5 ml-auto' onClick={()=>props.setIsAdding(true)}>Add Employee</button>
        </div>
    </div>
  )
}
