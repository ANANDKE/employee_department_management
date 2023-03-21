import React from 'react';
import Table from 'react-bootstrap/Table';
import department from './Department';
import Button from 'react-bootstrap/Button';
import { useNavigate  } from 'react-router-dom';


function DepList() {
    const navigate = useNavigate();
    const handleDelete2 = (id) => {
        let index = department.map(item=>item.id).indexOf(id)
        department.splice(index,1 )
        navigate('/deplist')


    }
  return (
    <>
          <h2 className='text-center p-3 mt-3'>Department Details</h2>
    <div className='text-center p-3'>
    <Button className='mb-3' variant="success" onClick={()=>navigate('/adddep')} size="lg">
          Add Department
        </Button>
         <Table striped bordered hover>
      <thead>
        <tr>
          <th>Id</th>
          <th>Department</th>
          <th>Description</th>
          <th>Action</th>

        </tr>
      </thead>
      <tbody>
        {
            department && department.length>0?
            department.map(item=>(
                <tr>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.description}</td>
                    <td>  <Button  onClick={()=>handleDelete2(item.id)} variant="secondary">Remove</Button></td>
                </tr>
            ))

            : 'no table data'
        }
       
      </tbody>
    </Table>
    <Button onClick={()=> navigate('/')} variant="primary">Back to Dashboard</Button>

    </div>
    </>
  )
}

export default DepList