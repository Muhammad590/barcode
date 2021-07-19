import React, { PureComponent,useState } from 'react'
import {Form,Button,Row,Col} from "react-bootstrap";
import "./signup.css"
function Signup(){

  // const [userRegister, setUserRegister] = useState({
  //   username : "",
  //   phone : "",
  //   email : "",
  //   password : "", 
  // })

  // const [records, setRecords ] = useState([]);

  // const handleInput =(e) =>{
  //     const name = e.target.name;
  //     const value = e.target.value;
  //     console.log(name, value,userRegister);

  //     setUserRegister({ ... userRegister, [name]: value})

    
 
  // } 
  //  const handleSubmit = (e) =>{
  //             e.preventDefault();

  //             const newRecords = { ... userRegister, id : new Date().getTime().toString()}
  //             console.log(records);
  //             setRecords([ ...records, newRecords])

  //             window.location.reload();
  //     }
    return(
        <>
  
     {/* <div className="Form">  
        <Form action="" onSubmit={handleSubmit}>

        <Form.Group className="mb-2" >
    <Form.Label>Full Name</Form.Label>
    <Form.Control type="text" autoComplete="off" value={userRegister.username}
    onChange={handleInput}
     name="username" id="username"  placeholder="Full Name" />
  </Form.Group>
  <Form.Group className="mb-2" >
    <Form.Label>Phone Number</Form.Label>
    <Form.Control type="numbers"  autoComplete="off" value={userRegister.phone}
    onChange={handleInput}
     name="phone" id="phone"  placeholder="Phone Number" />
  </Form.Group>

  <Form.Group className="mb-2">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email"  autoComplete="off" value={userRegister.email} 
    onChange={handleInput}
    name="email" id="email"  placeholder="Enter email" />
  </Form.Group>
  <Form.Group className="mb-4" >
    <Form.Label>Password</Form.Label>
    <Form.Control type="password"  autoComplete="off" value={userRegister.password}
    onChange={handleInput}
     name="password" id="password"  placeholder="Password" />
  </Form.Group>

  <Button variant="primary" type="submit" onClick={()=>{alert("Signup Successful")}}  className="mb-4">
    Register
  </Button>
</Form> 




</div> */}



        <div className="Form">

        <Form >
        <div className="d-flex justify-content-center mb-3">
          <h2 className="sign">Employee Details</h2>
        </div> 
  <Form.Group as={Row} className="mb-3 d-flex justify-content-center">
    <Form.Label column sm="3"  xs="3">
      Name
    </Form.Label>
    <Col sm="9" xs="9"  className="percent">
      <Form.Control type="text" className="line" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3 d-flex justify-content-center">
    <Form.Label column sm="3"  xs="3">
      Address
 </Form.Label>
    <Col sm="9" xs="9"  className="percent">
      <Form.Control  className="line"  />
    </Col>
  </Form.Group>

  <Form.Group as={Row}  className="mb-3 d-flex justify-content-center datepicker ">
    <Form.Label column sm="3" xs="3">
      Birth Date
 </Form.Label>
    <Col sm="9" xs="9"  className="percent">
      <Form.Control type="date" className="line"  />
    </Col>
  </Form.Group>

  <Form.Group as={Row}  className="mb-3 d-flex justify-content-center">
    <Form.Label column sm="3"  xs="3">
      Sex
 </Form.Label>
    <Col sm="9" xs="9"  className="percent">
    <select className="select"> 
                  <option name="male"> Male</option>
                  <option name="female">Female</option>
              </select>
    </Col>
  </Form.Group>

  <Form.Group as={Row}  className="mb-3 d-flex justify-content-center">
    <Form.Label column sm="3"  xs="3">
      Height
 </Form.Label>
    <Col sm="9" xs="9"  className="percent">
      <Form.Control type="number" className="line"  />
    </Col>
  </Form.Group>

  <Form.Group as={Row}  className="mb-3 d-flex justify-content-center">
    <Form.Label column sm="3"  xs="3">
      Weight
 </Form.Label>
    <Col sm="9" xs="9"  className="percent">
      <Form.Control type="number" className="line"  />
    </Col>
  </Form.Group>
  <Form.Group as={Row}  className="mb-3 d-flex justify-content-center">
    <Form.Label column sm="3"  xs="3">
      IdNumber
 </Form.Label>
    <Col sm="9" xs="9"  className="percent">
      <Form.Control type="number" className="line"  />
    </Col>
  </Form.Group>

  <Form.Group as={Row}  className="mb-3 d-flex justify-content-center">
    <Form.Label column sm="3"  xs="3">
      Issue Date
 </Form.Label>
    <Col sm="9" xs="9"  className="percent">
      <Form.Control type="date" className="line"  />
    </Col>
  </Form.Group>

  <Form.Group as={Row}  className="mb-3 d-flex justify-content-center">
    <Form.Label column sm="3"  xs="3">
      Expire Date
 </Form.Label>
    <Col sm="9" xs="9"  className="percent">
      <Form.Control type="date" className="line"  />
    </Col>
  </Form.Group>

  <Button  type="submit" className="mb-4 submit">
    Submit
  </Button>
  
</Form>

</div>  
        </>
    )
}

export default Signup;