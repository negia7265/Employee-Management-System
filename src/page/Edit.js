
import React, { useState } from 'react'
import Swal from 'sweetalert2';

import { db } from "./firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

export default function Edit(props) {
  

 
  const [firstName, setFirstName] = useState(props.selectedEmployees[0].firstName);
  const [lastName, setLastName] = useState(props.selectedEmployees[0].lastName);
  const [email, setEmail] = useState(props.selectedEmployees[0].email);
  const [salary, setSalary] = useState(props.selectedEmployees[0].salary);
  const [date, setDate] = useState(props.selectedEmployees[0].date);
  

  const handleUpdate= (e)=>{
    e.preventDefault();
    let id=props.selectedEmployees[0].id;
    console.log(id)
    if (!firstName || !lastName || !email || !salary || !date) {
      return Swal.fire({
          icon: 'error',
          title: 'Error!',
          text: 'All fields are required.',
          showConfirmButton: true
      });
  }
  const employee = {
    id,
    firstName,
    lastName,
    email,
    salary,
    date,
    id2:""
  }; 
  console.log(props.employees[id-1]);
  console.log(props.selectedEmployees[0].id2);
  const updated=props.employees.map(emp=>{
    if(emp.id===id){
      return employee;
    }
    return emp;
  });
  // props.employees[id-1]=employee;
  props.setEmployees(updated);
  props.setIsEditing(false);
  
  const updateUser = async (id, employee) => {
    const userDoc = doc(db, "employee", id);
    const newFields = { firstName:employee.firstName, lastName:employee.lastName,
    email:employee.email,salary:employee.salary,date:employee.date,id:employee,id,
    id2:employee.id2
    };
    await updateDoc(userDoc, newFields);
  };
  updateUser(props.selectedEmployees[0].id2, employee);


  Swal.fire({
    icon: 'success',
    title: 'Updated!',
    text: `${employee.firstName} ${employee.lastName}'s data has been updated.`,
    showConfirmButton: false,
    timer: 1500
});
};




  return (
    <div className='container'>
<form onSubmit={handleUpdate}>
  <div class="m-4">
  </div>
  <div className="mb-3">
    <label htmlFor="firstName" className="form-label">First Name</label>
    <input className="form-control" id="firstName"
         type="text"
         name='firstName'
         value={firstName}
         onChange={e=>setFirstName(e.target.value)} />
  </div>


  <div className="mb-3">
    <label htmlFor="lastName" className="form-label">Last Name</label>
    <input  value={lastName} name="lastName" type="text" className="form-control" id="lastName" onChange={e=>setLastName(e.target.value)} />
  </div>

  <div class="mb-3">
    <label htmlFor="email" class="form-label">Email</label>
    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" value={email} onChange={e => setEmail(e.target.value)}/>
  </div>

  <div class="mb-3">
    <label htmlFor="salary" class="form-label">Salary</label>
    <input type="salary"  name="salary" className="form-control" id="salary" aria-describedby="emailHelp" value={salary} onChange={e => setSalary(e.target.value)} />
  </div>

  <div class="mb-3">
    <label htmlFor="date" class="form-label">Date</label>
    <input type="date"  name="date" className="form-control" id="date" aria-describedby="emailHelp" value={date} onChange={e =>setDate(e.target.value)} />
  </div>
      
      <button className="btn btn-primary m-4" type="submit">Edit</button>
      <button className="btn btn-secondary" onClick={()=>props.setIsEditing(false)}>Cancel</button>
</form>
  </div>
  );
}

// import React, { useState } from 'react'
// import Swal from 'sweetalert2';



// export default function Edit(props) {
  

  
//   const id = props.selectedEmployees[0].id;

//   const [firstName, setFirstName] = useState(props.selectedEmployees[0].firstName);
//   const [lastName, setLastName] = useState(props.selectedEmployees[0].lastName);
//   const [email, setEmail] = useState(props.selectedEmployees[0].email);
//   const [salary, setSalary] = useState(props.selectedEmployees[0].salary);
//   const [date, setDate] = useState(props.selectedEmployees[0].date);
  

//   const handleUpdate= (e)=>{
//     e.preventDefault();
    
//     if (!firstName || !lastName || !email || !salary || !date) {
//       return Swal.fire({
//           icon: 'error',
//           title: 'Error!',
//           text: 'All fields are required.',
//           showConfirmButton: true
//       });
//   }
//   const employee = {
//     id,
//     firstName,
//     lastName,
//     email,
//     salary,
//     date
//   };
//   props.employees[id-1]=employee;
//   props.setEmployees(props.employees);
//   props.setIsEditing(false);

//   Swal.fire({
//     icon: 'success',
//     title: 'Updated!',
//     text: `${employee.firstName} ${employee.lastName}'s data has been updated.`,
//     showConfirmButton: false,
//     timer: 1500
// });
// };




//   return (
//     <div className='container'>
// <form onSubmit={handleUpdate}>
//   <div className="m-4">
//   </div>
//   <div className="mb-3">
//     <label htmlFor="firstName" className="form-label">First Name</label>
//     <input className="form-control" id="firstName"
//          type="text"
//          name='firstName'
//          value= {firstName}
//          placeholder={firstName}
//          onChange={e=>setFirstName(e.target.value)} />
//   </div>


//   <div className="mb-3">
//     <label htmlFor="lastName" className="form-label">Last Name</label>
//     <input  value={lastName} name="lastName" type="text" className="form-control" id="lastName" onChange={e=>setLastName(e.target.value)} />
//   </div>

//   <div className="mb-3">
//     <label htmlFor="email" className="form-label">Email</label>
//     <input type="email" className="form-control" id="email" aria-describedby="emailHelp" value={email} onChange={e => setEmail(e.target.value)}/>
//   </div>

//   <div className="mb-3">
//     <label htmlFor="salary" className="form-label">Salary</label>
//     <input type="salary"  name="salary" className="form-control" id="salary" aria-describedby="emailHelp" value={salary} onChange={e => setSalary(e.target.value)} />
//   </div>

//   <div className="mb-3">
//     <label htmlFor="date" className="form-label">Date</label>
//     <input type="date"  name="date" className="form-control" id="date" aria-describedby="emailHelp" value={date} onChange={e =>setDate(e.target.value)} />
//   </div>
      
//       <button className="btn btn-primary m-4" type="submit">Edit</button>
//       <button className="btn btn-secondary" onClick={()=>props.setIsEditing(false)}>Cancel</button>
// </form>
//   </div>
//   );
// }
