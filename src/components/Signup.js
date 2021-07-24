import React, { PureComponent,useState  , useRef} from 'react'
import {Form,Button,Row,Col} from "react-bootstrap";
import "./signup.css"
import Barcode from "react-barcode";
import cssFont from "css-font";
import styled from "styled-components";
import axios from 'axios'






function Signup(){
  const svgRef = useRef(null);
  const [input, setInput] = useState(null);
  const [format, setFormat] = useState("CODE128");
  const [submit, setSubmit] = useState(false);
  const [employInfo,setEmployinfo] = useState({})


  const handleDownload = () => {
    const preface = '<?xml version="1.0" standalone="no"?>\r\n';
    const svgElement = svgRef.current.refs.renderElement.outerHTML;
    const svgBlob = new Blob([preface, svgElement], {
      type: "image/svg+xml;charset=utf-8"
    });
    const svgUrl = URL.createObjectURL(svgBlob);
    const downloadLink = document.createElement("a");
    downloadLink.href = svgUrl;
    downloadLink.download = "barcode.svg";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };


  const handelChange =(e)=> {
    console.log(e.target.name , e.target.value)
    setEmployinfo({...employInfo ,[e.target.name]:e.target.value})
  }

 const handelSubmit =async(e) => {
    e.preventDefault()

    if(employInfo.name && employInfo.id && employInfo.expiry && employInfo.height && employInfo.weight && employInfo.birthday && employInfo.issuedate)
    { 
    setInput(employInfo.name+' ,Weh:'+ employInfo.weight + ' id: '+employInfo.id+' expiry: '+employInfo.expiry+' heigh: '+employInfo.height+' b/d: '+employInfo.birthday+' iss/d: '+employInfo.issuedate)
    setSubmit(true)
   console.log("fff", employInfo)
   let res = await axios.post("user/emplyoyinfo" , employInfo)
   console.log(res)
   alert("Info Saved")

    }
    

 }

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
<div className="container">

  <div>
        <div className="Form" style={{
        position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)',
        
      }} >

        <Form onSubmit={handelSubmit} >
        <div className="d-flex justify-content-center mb-3">
          <h2 className="sign">Employee Details</h2>
        </div> 
  <Form.Group style={{marginLeft:'0px', marginRight:'0px'}} as={Row} className="mb-3 d-flex justify-content-center">
    <Form.Label column sm="3"  xs="3">
      Name
    </Form.Label>
    <Col sm="9" xs="9"  className="percent">
      <Form.Control onChange={handelChange} name="name" type="text" className="line" />
    </Col>
  </Form.Group>

  <Form.Group as={Row} className="mb-3 d-flex justify-content-center">
    <Form.Label column sm="3"  xs="3">
      Address
 </Form.Label>
    <Col sm="9" xs="9"  className="percent">
      <Form.Control onChange={handelChange} name="address"  className="line"  />
    </Col>
  </Form.Group>


  <Form.Group as={Row}  className="mb-3 d-flex justify-content-center">
    <Form.Label column sm="3"  xs="3">
      IdNumber
 </Form.Label>
    <Col sm="9" xs="9"  className="percent">
      <Form.Control onChange={handelChange} name="id" type="number" className="line"  />
    </Col>
  </Form.Group>
  

  <Form.Group as={Row}  className="mb-3 d-flex justify-content-center">
    <Form.Label column sm="3"  xs="3">
      Height
 </Form.Label>
    <Col sm="9" xs="9"  className="percent">
      <Form.Control onChange={handelChange} name="height" type="number" className="line"  />
    </Col>
  </Form.Group>

  <Form.Group as={Row}  className="mb-3 d-flex justify-content-center">
    <Form.Label column sm="3"  xs="3">
      Weight
 </Form.Label>
    <Col sm="9" xs="9"  className="percent">
      <Form.Control onChange={handelChange} name="weight" type="number" className="line"  />
    </Col>
  </Form.Group>
  

  <Form.Group as={Row}  className="mb-3 d-flex justify-content-center">
    <Form.Label column sm="3"  xs="3">
      Sex
 </Form.Label>
    <Col sm="9" xs="9"  className="percent">
    <select onSelect={handelChange} name="sex" className="select"> 
                  <option name="male"> Male</option>
                  <option name="female">Female</option>
              </select>
    </Col>
  </Form.Group>

    <Form.Group as={Row}  className="mb-3 d-flex justify-content-center datepicker ">
    <Form.Label column sm="3" xs="3">
      Birth Date
 </Form.Label>
    <Col sm="9" xs="9"  className="percent">
      <Form.Control onChange={handelChange} name="birthday" type="date" className="line"  />
    </Col>
  </Form.Group>
  <Form.Group as={Row}  className="mb-3 d-flex justify-content-center">
    <Form.Label column sm="3"  xs="3">
      Issue Date
 </Form.Label>
    <Col sm="9" xs="9"  className="percent">
      <Form.Control onChange={handelChange} name="issuedate" type="date" className="line"  />
    </Col>
  </Form.Group>

  <Form.Group as={Row}  className="mb-3 d-flex justify-content-center">
    <Form.Label column sm="3"  xs="3">
      Expire Date
 </Form.Label>
    <Col sm="9" xs="9"  className="percent">
      <Form.Control onChange={handelChange} name="expiry" type="date" className="line"  />
    </Col>
  </Form.Group>
  


  <Button  type="submit" className="mb-4 submit">
    Submit
  </Button>
  
</Form>
<div style={{overflow:"scroll"}}>
{submit==true ?<div style={{display:"flex" , flexDirection:"column" , justifyContent:"center" , alignItems:"center"}}><Barcode
        ref={svgRef}
        value={input}
        // displayValue={false}
        height={90}
        format={format}
        font="Avenir Next"
        fontOptions="600"
        textMargin={4}
        margin={0}
      /> <Button onClick={handleDownload}>Download</Button> </div>: null }
      </div>
                </div> 
        </div>
</div>

</>
    )
}

export default Signup;