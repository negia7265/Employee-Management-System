import React,{useState} from 'react'
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

export default function Add(props) {

  
  


  const [firstName,setFirstName]=useState('');
  const [lastName,setLastName]=useState('');
  const [email,setEmail]=useState('');
  const [salary,setSalary]=useState('');
  const [date,setDate]=useState('');


  const id=props.employees.length+1; 
  const usersCollectionRef = collection(db, "employee");
  const createUser = async () => {
    await addDoc(usersCollectionRef, { firstName : firstName, lastName:lastName,email:email,id:id,salary:salary,date:date,id2:""});
  };
  
  const handleAdd=(e)=>{
  e.preventDefault();
  if (!firstName || !lastName || !email || !salary || !date) {
    return Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'All fields are required.',
        showConfirmButton: true
    });
}
  else
  props.setIsAdding(false);
  createUser();
  const id=props.employees.length+1;
  const newEmployee={
    id,
    firstName,
    lastName,
    email,
    salary,
    date
  }

  props.employees.push(newEmployee);
  props.setEmployees(props.employees);
  props.setIsAdding(false);
   
  Swal.fire({
    icon: 'success',
    title: 'Added!',
    text: `${firstName} ${lastName}'s data has been Added.`,
    showConfirmButton: false,
    timer: 1500
});

  }




  return (
    <div className='container'>
    
<form onSubmit={handleAdd}>
  <div class="m-4">
  <h1>Add Employee</h1>
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
      
      <button className="btn btn-primary m-4" type="submit">Add</button>
      <button className="btn btn-secondary" onClick={()=>props.setIsAdding(false)}>Cancel</button>
</form>
    {/* <form onSubmit={handleAdd}>
    <h1>Add Employee</h1>
    <label htmlhtmlFor='firstName'>First Name</label>
    <input 
         id="firstName"
         type="text"
         name='firstName'
         value={firstName}
         onChange={e=>setFirstName(e.target.value)}
    />
    <label htmlhtmlFor='lastName'>Last Name</label>
    <input
         id="lastName"
         type="text"
         name="lastName"
         onChange={e=>setLastName(e.target.value)}
      />

      <label htmlhtmlFor="email">Email</label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
     <label htmlhtmlFor="salary">Salary ($)</label>
                <input
                    id="salary"
                    type="number"
                    name="salary"
                    value={salary}
                    onChange={e => setSalary(e.target.value)}
                />
      <label htmlhtmlFor="date">Date</label>
                <input
                    id="date"
                    type="date"
                    name="date"
                    value={date}
                    onChange={e => setDate(e.target.value)}
                />
       
       <button className="btn btn-primary" type="submit">Add</button>
       <button className="btn btn-secondary" onClick={()=>props.setIsAdding(false)}>Cancel</button>
  </form> */}
      
      </div>
  )
}
