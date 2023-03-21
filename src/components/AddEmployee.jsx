import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react';
import employee from './Employee';
import uuid from 'react-uuid';
import { useNavigate } from 'react-router-dom';


function AddEmployee() {
  let naviagte = useNavigate();
  

  const [id, setId]=useState('')
  const [uname,setUname]=useState('')
  const [department, setDepartment]=useState('')
  const [salary, setSalary]=useState(0)
  const [rating, SetRating]=useState(0)

  const handleAdd =(e) => {
    e.preventDefault()
    let ids = uuid()

    let uniqueid=ids.slice(0,8)



    employee.push(
      {
        id:uniqueid,
        name:uname,
        department:department,
        salary:salary,
        rating:rating,
    }
      
    )
    naviagte('/emplist')


  }
  
  return (
    <>
    <h3 className='text-center text-warning p-3 mt-3'> Add details of Employee</h3>
    <Container>
      <Row>
        <Col>
        <Form className='border p-5 rounded'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Employee Name</Form.Label>
        <Form.Control type="text" placeholder='Employee Name' required 
        onChange={(e)=>setUname(e.target.value) }
        />
        <Form.Label>Employee Department</Form.Label>
        <Form.Control type="text" placeholder='Employee Department' required
        onChange={(e)=>setDepartment(e.target.value) }

         />
        <Form.Label>Employee Salary</Form.Label>
        <Form.Control type="Number" placeholder='Employee Salary' required 
        onChange={(e)=>setSalary(e.target.value) }

        /> 
        <Form.Label>Employee Rating</Form.Label>
        <Form.Control type="number" placeholder='Employee Rating' required 
        onChange={(e)=>SetRating(e.target.value) }

        />
      </Form.Group> 

      <Button
        onClick={(e)=>handleAdd(e)}
       variant="primary" type="submit">
        Add
      </Button>
    </Form>

        </Col>
      </Row>
    </Container>
    </>
  )
}

export default AddEmployee