import React, { useState , useEffect } from 'react';
import EmployeeService from '../server/EmployeeService';
import {Link} from "react-router-dom"

function useEmployeeList() {
  // creating use state method for employee method to get data
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
         
    getAllEmployees();
      
  }, []);

  const getAllEmployees =() =>{
  EmployeeService.getAllEmployees()
     
  .then((response) => {
    setEmployees(response.data);
    console.log (response.data)
  })
  .catch(error => {
    console.log('Error fetching employees:', error);
  });

 }

  const deleteEmployee = (employeeId)=>{
      EmployeeService.deleteEmployee(employeeId).then((response) =>{
          getAllEmployees();

      }).catch((error) =>{
        console.log(error);
      })
  }

  return (
    <div className='container'>
      <h2 className='text-center'>List Of Employees</h2>
      <Link to="/add-employee" className="btn btn-primary mb-2">Add Employee</Link>

      <table className='table table-bordered table-striped'>
        <thead>
          <tr>
            <th>employee Id</th>
            <th>Employee first Name</th>
            <th>Employee last Name</th>
            <th>Email</th>
            <th>Mobile Number</th>
            <th>CompanyName</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {employees.map(
            employee => 
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.email}</td>
              <td>{employee.number}</td>
              <td>{employee.companyName}</td>
              <td>
               <Link className='btn btn-info' to={`/edit-employee/${employee.id}`}>Update</Link>
               <button className='btn btn-danger ms-2' onClick={() => deleteEmployee(employee.id)}>Delete</button>
              </td>
            </tr>
          )
        }
        </tbody>
      </table>
    </div>
  );
}

export default useEmployeeList;
