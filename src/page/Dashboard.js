import React,{useState,useEffect} from 'react';
import Header from './Header';
import List from './List';
import Add from './Add';
import Edit from './Edit';
import Swal from "sweetalert2";
import {employeesData} from '../data/index';
import { db } from "./firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

export default function Dashboard() {
  const usersCollectionRef = collection(db, "employee");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id2 : doc.id })));
    };
  
    getUsers();
  }, []);
 


  const [employees,setEmployees]=useState([]);
  const [selectedEmployees,setselectedEmployees]=useState(null);
  const[isAdding,setIsAdding]=useState(false);
  const [isEditing,setIsEditing]=useState(false); 
  
  useEffect(() => {
    setEmployees(users);
  }, [users]);
  


  const handleDelete=(del)=>{
   
    const [employee] = employees.filter(employee => employee.id === del);
    Swal.fire({
      icon: 'warning',
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
  }).then( result => {
      if (result.value) {
        const filteredData=employees.filter(item => item.id!==del);
        setEmployees(filteredData);
        
        

      Swal.fire({
        icon: 'success',
        title: 'Deleted!',
        text: `${employee.firstName} ${employee.lastName}'s data has been deleted.`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
});
}
const handlefirebase=(temp)=>{
  const deleteUser = async (temp) => {
       const userDoc = doc(db, "employee", temp);
       await deleteDoc(userDoc);
     };
    deleteUser(temp);
}


  const handleEdit=(ed)=>{
  console.log(1);
  const employee = employees.filter(employeem => employeem.id === ed);
  setselectedEmployees(employee);
  setIsEditing(true);
  }

  return (
    <>
    
        { 
        !isAdding && !isEditing && (
            <>
            <Header setIsAdding={setIsAdding} />
            <List employees={employees} handleEdit={handleEdit} handleDelete={handleDelete} handlefirebase={handlefirebase} />
            </>
        )
        }
        {
          isAdding && (
            <>
            <Add employees={employees}
            setEmployees={setEmployees}
            setIsAdding={setIsAdding}
            />
            </>
          )
        }
        {
          isEditing && (
            <>
            <Edit
            employees={employees}
            selectedEmployees={selectedEmployees}
            setEmployees={setEmployees}
            setIsEditing={setIsEditing}
            /> 
            </>
          )
        }

    </>
  )
}