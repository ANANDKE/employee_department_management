import React from 'react';
import { useState, useEffect } from 'react';
import department from './Department';
import uuid from 'react-uuid';
import { useNavigate } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function AddDepartment() {
  let naviagte = useNavigate();

    const [id,setId] = useState('')
    const[dep,setDep] = useState('')
    const[description,setDescription] = useState('')

    const handleAdd2 =(e) => {
        e.preventDefault()
        let ids = uuid()
    
        let uniqueid=ids.slice(0,8)

        department.push(
          {
            id:uniqueid,
            name:dep,
            description:description
        }
          
        )
        naviagte('/deplist')
    
    
      }
  return (
    <>
     <h3 className='text-center text-warning p-3 mt-3'> Add details of Department</h3>
    <Container>
      <Row>
        <Col>
        <Form className='border p-5 rounded'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Department Name</Form.Label>
        <Form.Control type="text" placeholder='Department Name' required 
        onChange={(e)=>setDep(e.target.value) }
        />
        <Form.Label>Employee Department</Form.Label>
        <Form.Control type="text" placeholder='Department Description' required
        onChange={(e)=>setDescription(e.target.value) }
         />
      </Form.Group> 

      <Button
        onClick={(e)=>handleAdd2(e)}
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

export default AddDepartment