import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import employee from './Employee';
import department  from './Department';

function Dashboard() {
    let empno = employee.length;
    let depno = department.length;

  return (
    <div>
        <h2 className='text-center'>Dashboard</h2>
        <div style={{display:'flex', justifyContent:'space-evenly'}}>
            <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title> Employees</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Total Employees  : {empno} </Card.Subtitle>
        
        <Link to='/emplist'>Employees</Link>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Departments</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Total Departments : {depno}</Card.Subtitle>
       
        <Link to='/deplist'>Departments</Link>
      </Card.Body>
    </Card>
    </div>
    </div>
  )
}

export default Dashboard