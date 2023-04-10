import axios from 'axios';
import React from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { register, handleSubmit } = useForm()
  const navigate = useNavigate()
  const submit = data => {
    console.log(data)
      axios.post('https://e-commerce-api-v2.academlo.tech/api/v1/users/login', data)
          .then(res => {navigate('/'), console.log(res)
              localStorage.setItem('token', res.data.token)
        })
          .catch(error => {
              if(error.response?.status ===401) {
                alert('credenciales incorectas')
              } else {
                console.log(error.response?.data)
              }
          })
  }
  return (


    <Form onSubmit={handleSubmit(submit)} style={{ maxWidth: 500, margin: '0 auto',  }}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" {...register('email')} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" {...register('password')} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>



  );
};

export default Login;