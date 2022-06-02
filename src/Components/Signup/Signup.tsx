import React, { useState } from "react";
import {
  Button,
  Form,
  InputGroup,
  FormControl,
  FormCheck,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Signup.css"
const Signup = () => {
let navigate=useNavigate()
const [validate,setValidate]=useState(false)

  const [Data, setData] = useState({
    Name: "",
    Email: "",
    password: "",
    Age:"",
    checkbox:""
  });

  
  const handleChange = async (e:any) => {
    setData({ ...Data, [e.target.name]: e.target.value });
    console.log(Data, "sign");
  };
  const signSubmit = (e:any) => {
    e.preventDefault();
    let localdata = localStorage.getItem('Sign');

    if (localdata) {
      let local = JSON.parse(localdata);
      local.push(Data);
      localStorage.setItem('Sign', JSON.stringify(local));
    } else {
      localStorage.setItem('Sign', JSON.stringify([Data]));
    }
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }

    setValidate(true);
    if(Data.Name !== "" && Data.Email!=="" &&Data.password!==""&& Data.Age!=="" && Data.checkbox!==""){
     navigate("/Form");

    }
    //  navigate("/Form");
  };

  return (
    <div>
      <div>

        <div className="Margin">
          <h1>Register</h1>
          <Form className="sign" noValidate validated={validate} onSubmit={signSubmit}>
            <InputGroup hasValidation>
              <div className="container">
                <InputGroup.Text id="basic-addon1">User Name</InputGroup.Text>
                <FormControl
                  placeholder="UserName"
                  name="Name"
                  type="Name"
                  onChange={handleChange}
                  required
                />
                <Form.Control.Feedback type="invalid">
                 Please fill a FirstName.
                 </Form.Control.Feedback>
              </div>
             
            </InputGroup>
            <InputGroup>
              <div className="container">
                <InputGroup.Text id="basic-addon1">Mail ID</InputGroup.Text>
                <FormControl
                  placeholder="name@gmail.com"
                  name="Email"
                  type="Email"
                  aria-describedby="basic-addon1"
                  onChange={handleChange}
                  required
                />
                <Form.Control.Feedback type="invalid">
                 Please fill a name@gmail.com.
                 </Form.Control.Feedback>
              </div>
            </InputGroup>
            <InputGroup className="">
              
              <div className="container">
                <InputGroup.Text id="basic-addon1">
                Password
                </InputGroup.Text>
                <FormControl
                  placeholder="Conform password"
                  type="password"
                  name="password"
                  required
                  aria-describedby="basic-addon1"
                  onChange={handleChange}
                />
                <Form.Control.Feedback type="invalid">
                 Please fill a Password.
                 </Form.Control.Feedback>
              </div>
              <div className="container">
                <InputGroup.Text id="basic-addon1">
                Age
                </InputGroup.Text>
                <FormControl
                  placeholder=" Age"
                  type="Number"
                  name="Age"
                  required
                  aria-describedby="basic-addon1"
                  onChange={handleChange}
                />
                <Form.Control.Feedback type="invalid">
                 Please fill a Age.
                 </Form.Control.Feedback>
              </div>
              <Form.Group className="lable">
                <FormCheck
                  onChange={handleChange}
                  type="checkbox"
                  label="Agree with sign In"
                  name="checkbox"
                  required
                />
               
              </Form.Group>
            </InputGroup>
            <div className="btnAlign">
              <Button
                className="center"
                size="lg"
                variant="success"
                type="submit"
              >
                Submit
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
