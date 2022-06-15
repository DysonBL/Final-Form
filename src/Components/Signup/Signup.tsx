import React, { useState } from "react";
import { POST_SIGNUSER} from "../Redux/ActionType";
import { useDispatch } from "react-redux";
import {
  Button,
  Form,
  InputGroup,
  FormControl,
  FormCheck,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Signup.css"
import { v4 as uuidv4 } from 'uuid';

interface user{
  Name:String,
  Email:String,
  password:String|Number,
  Age:Number,
  
}
const Signup = () => {

  let dispatch: any = useDispatch()
  let navigate = useNavigate()
  const [validate, setValidate] = useState(false)

  const [Data, setData] = useState({
    id:uuidv4(),
    Name: "",
    Email: "",
    password: "",
    Age: "",
    checkbox: ""
  });
  console.log(Data,"signupData")
  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...Data, [e.target.name]: e.target.value });
  };
  const signSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setValidate(true);
    dispatch(POST_SIGNUSER(Data))
    if (Data.Name !== "" && Data.Email !== "" && Data.password !== "" && Data.Age !== "" && Data.checkbox !== "") {
      navigate("/Form");
      console.log(dispatch, "dispatch")
    };
    localStorage.setItem('Sign', JSON.stringify([Data]));
  }
  return (
    <div>
      <div>

        <div className="Margin">
          <h1>Register</h1>
          <Form className="sign formClass" noValidate validated={validate} onSubmit={signSubmit} >
            <InputGroup hasValidation>
              <div className="col d-flex">
                <InputGroup.Text id="basic-addon1" className="inputFieldAlign">User Name</InputGroup.Text>
                <FormControl
                  placeholder="UserName"
                  className="mx-3"
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
            <InputGroup className="mt-3">
              <div className="col d-flex">
                <InputGroup.Text id="basic-addon1" className="inputFieldAlign">Mail ID</InputGroup.Text>
                <FormControl
                  placeholder="name@gmail.com"
                  name="Email"
                  className="mx-3"
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
            <InputGroup className="mt-3">

              <div className="col d-flex">
                <InputGroup.Text id="basic-addon1" className="inputFieldAlign">
                  Password
                </InputGroup.Text>
                <FormControl
                  placeholder="Conform password"
                  type="password"
                  name="password"
                  className="mx-3"
                  required
                  aria-describedby="basic-addon1"
                  onChange={handleChange}
                />
                <Form.Control.Feedback type="invalid">
                  Please fill a Password.
                </Form.Control.Feedback>
              </div>
              <InputGroup className="mt-3">
              <div className="col d-flex">
                <InputGroup.Text id="basic-addon1" className="inputFieldAlign">
                  Age
                </InputGroup.Text>
                <FormControl
                  placeholder=" Age"
                  type="Number"
                  name="Age"
                  className="mx-3"
                  required
                  aria-describedby="basic-addon1"
                  onChange={handleChange}
                />
                <Form.Control.Feedback type="invalid">
                  Please fill a Age.
                </Form.Control.Feedback>
              </div>
              </InputGroup>
              <Form.Group className="lable mt-3">
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
