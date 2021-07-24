import React, { PureComponent,useState } from 'react'
import {Form,Button,Row,Col} from "react-bootstrap"
import "./login.css";
import axios from 'axios'




function Login()
{

    const [userLogin, setUserLogin] = useState({
        email : "" ,
        password : "" ,

    })
   
   
    
    const handleInput = (e) =>
    {
        const name = e.target.name;
        const value = e.target.value;
        console.log(name,value,userLogin)
        setUserLogin({ ... userLogin, [name] : value})
    }


    const handleSubmit =async(e) =>{
        e.preventDefault();
        try{ let res = await axios.post("user/login" , userLogin)
         console.log(res)
         alert("logged in ..")
         window.location.reload();}
         catch(err){
           alert("error while log in")
console.log(err)
         }
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