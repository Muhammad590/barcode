import React, { PureComponent,useState } from 'react'
import {Form,Button,Row,Col} from "react-bootstrap"
import "./login.css";



function Login()
{

    const [userLogin, setUserLogin] = useState({
        email : "" ,
        password : "" ,

    })
   
    const [record, setRecord] = useState([]) 
    
    const handleInput = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
      console.log(name,value,userLogin)
         setUserLogin({ ... userLogin, [name] : value})

    }


    const handleSubmit =(e) =>{
        e.preventDefault();

        const newRecord = { ... userLogin, id : new Date().getTime().toString()}
          console.log(record)

         setRecord([ ... record,newRecord])

           window.location.reload();
    }


    return(
        <>

<div className="container">
        <div className="Form_1">
        <Form onSubmit={handleSubmit}>
        <div className="d-flex justify-content-center mb-3 ">
          <h2  className="login">Login</h2>
        </div> 
  <Form.Group as={Row} className="mb-3">
    <Form.Label column sm="4"  xs="4">
      Email
    </Form.Label>
    <Col sm="8" xs="8"  className="percent">
      <Form.Control type="email" className="lined"
      autoComplete="off" value={userLogin.email} 
    onChange={handleInput}
    name="email" id="email" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3 ">
    <Form.Label column sm="4"  xs="4">
      Password
 </Form.Label>
    <Col sm="8" xs="8"  className="percent">
      <Form.Control type="password" autoComplete="off" value={userLogin.password}
    onChange={handleInput}
     name="password" id="password" className="lined"  />
    </Col>
  </Form.Group>

  <Button variant="dark" type="submit" className="mb-4 Login">
    Login
  </Button>


</Form>
        </div>  
        </div>  
        </>
    )
}

export default Login;