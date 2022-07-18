import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';




export  default function Login (){
 
 

  const navigate = useNavigate();
  
  
  return (
    <div className='App'>
      <h2>Login Form</h2>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label><h4>Email address</h4></Form.Label>
        <Form.Control required type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
            <br/>
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label ><h4>
            Password
            </h4>
            </Form.Label>
        <Form.Control required minLength={3} maxLength={15} type="password" placeholder="Password" />
      </Form.Group>
      
      <Button style={{color:"blue"}}   onClick={()=>{navigate('/products')}} variant="primary"  type="submit">
        Login
      </Button>
    </Form>
    </div>
  );
}


