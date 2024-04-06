import React, { useState,useEffect } from 'react';
import { useNavigate , Link , useParams} from 'react-router-dom';
import EmployeeService from '../server/EmployeeService';

function AddEmployee() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [company, setCompany] = useState('');
    const navigate = useNavigate();
    const {id} = useParams();

    const saveOrUpdateEmployee = (e) => {
        e.preventDefault();
        const employee = { firstName, lastName, email, number, company }

        if(id){
          EmployeeService.updateEmployee(id , employee).then((response)=>{
             navigate('/')
          }).catch(error =>{
            console.log(error)
          })
        }else{

        EmployeeService.createEmployee(employee)
            .then((response) => {
                console.log(response.data);
                navigate('/');
            })
            .catch((error) => {
                console.log(error);
            })

          }
        }
            useEffect (()=> {
              EmployeeService.getEmployeeById(id).then((response) =>{
                setFirstName(response.data.firstName)
                setLastName(response.data.lastName)
                setEmail(response.data.email)
                setNumber(response.data.number)
                setCompany(response.data.company)
              }).catch(error =>{
                console.log(error)
              })
            }, [])

           const title = () =>{
              if(id){
                return <h2 className='text-center'>Update Employee</h2>
              }else{
                return <h2 className='text-center'>Add Employee</h2>
              }
            }

    return ( 
        <div>
            <div className='container'>
                <div className='row mt-4'>
                    <div className='card col-md-6 offset-md-3 offset-md-3 mt-4'>
                        {
                          title()
                        }
                        <div className='card-body'>
                            <form>
                                <div className='form-group mb-2'>
                                    <label className='form-label'>First Name</label>
                                    <input
                                        type='text'
                                        placeholder='Enter First Name'
                                        name='firstName'
                                        className='form-control'
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                    />
                                </div>

                                <div className='form-group mb-2'>
                                    <label className='form-label'>Last Name</label>
                                    <input
                                        type='text'
                                        placeholder='Enter Last Name'
                                        name='lastName'
                                        className='form-control'
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                    />
                                </div>

                                <div className='form-group mb-2'>
                                    <label className='form-label'>Email</label>
                                    <input
                                        type='text'
                                        placeholder='Enter Email'
                                        name='email'
                                        className='form-control'
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>

                                <div className='form-group mb-2'>
                                    <label className='form-label'>Number</label>
                                    <input
                                        type='number'
                                        placeholder='Enter Number'
                                        name='number'
                                        className='form-control'
                                        value={number}
                                        onChange={(e) => setNumber(e.target.value)}
                                    />
                                </div>

                                <div className='form-group mb-2'>
                                    <label className='form-label'>Company Name</label>
                                    <input
                                        type='text'
                                        placeholder='Enter Company Name'
                                        name='collage'
                                        className='form-control'
                                        value={company}
                                        onChange={(e) => setCompany(e.target.value)}
                                    />
                                </div>

                                <div className='text-center'>
                                    <button
          
                                        type='button'
                                        className='btn btn-success mt-2 me-4'
                                        onClick={(e) => saveOrUpdateEmployee(e)}
                                        >
                                        Submit
                                    </button>

                                    {/*---to cancle the input */}

                                    <Link to="/" className="btn btn-danger mt-2">Cancel</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default AddEmployee;