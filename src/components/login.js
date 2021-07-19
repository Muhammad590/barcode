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
        <div className="Form_1">
        <Form  onSubmit={handleSubmit}>

  <Form.Group className="mb-2">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email"  autoComplete="off" value={userLogin.email} 
    onChange={handleInput}
    name="email" id="email"  placeholder="Enter email" />
  </Form.Group>
  <Form.Group className="mb-4" >
    <Form.Label>Password</Form.Label>
    <Form.Control type="password"  autoComplete="off" value={userLogin.password}
    onChange={handleInput}
     name="password" id="password"  placeholder="Password" />
  </Form.Group>

  <Button variant="primary" type="submit" onClick={()=>{alert("Login Successful")}}  className="mb-4">
    Login
  </Button>
</Form>
        </div>     
        </>
    )
}

export default Login;