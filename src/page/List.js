import React from 'react'

export default function List(props) {
  return (
    <div class="container">
      <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">No</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Email</th>
      <th scope="col">Salary</th>
      <th scope="col">Date</th>
      <th scope="col" colspan="2" >Actions</th>
    </tr>
  </thead>
  <tbody>
    {
      props.employees.length>0?(
      props.employees.map((employee,i)=>(
      <tr key={employee.id}>
      <td>{i+1}</td>
      <td>{employee.firstName}</td>
      <td>{employee.lastName}</td>
      <td>{employee.email}</td>
      <td>{`₹${employee.salary}`}</td>
      <td>{employee.date}</td>
      <td className='text-right'>
        <button  className="btn btn-outline-warning"onClick={()=>props.handleEdit(employee.id)}>
        Edit
        </button>
      </td>
      <td className='text-left'>
        <button className="btn btn-outline-danger" onClick={()=>{
        props.handleDelete(employee.id);props.handlefirebase(employee.id2)
        }} >
        Delete
        </button>
      </td>
      </tr>
      ))
      ):(
        <tr>
          <td colSpan={7}>No Employees</td>
        </tr> 
      )
    }
     
    
    
  </tbody>
</table>
    </div>
  )
}
