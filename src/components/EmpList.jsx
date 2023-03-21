import React from 'react';
import Table from 'react-bootstrap/Table';
import employee from './Employee';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

function EmpList() {
    const navigate = useNavigate();

    const handleDelete = (id) => {
        let index = employee.map(item=>item.id).indexOf(id)
        employee.splice(index,1 )
        navigate('/emplist')


    }
  return (
    <>
    <h2 className='text-center p-3 mt-3'>Employee Details</h2>
    <div className='text-center p-3'>
    <Button className='mb-3' variant="success" onClick={()=>navigate('/addemp')} size="lg">
          Add Employee
        </Button>
         <Table striped bordered hover>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Department</th>
          <th>Salary</th>
          <th>Rating</th>
          <th>Action</th>


        </tr>
      </thead>
      <tbody>
        {
            employee && employee.length>0?
            employee.map(item=>(
                <tr>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.department}</td>
                    <td>{item.salary}</td>
                    <td>{item.rating}</td>
                    <td> 
                         <Button onClick={()=>handleDelete(item.id)} variant="secondary">Remove</Button>
                     </td>
                </tr>
            ))

            :'no table data'
        }
      </tbody>
    </Table>
    <Button onClick={()=> navigate('/')} variant="primary">Back to Dashboard</Button>
    </div>
    </>
  )
}

export default EmpList