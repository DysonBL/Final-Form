import React, { useState } from "react";
import { POST_SIGNUSER, POST_USER } from "../Redux/ActionType";
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


const Signup = () => {

  let dispatch: any = useDispatch()
  let navigate = useNavigate()
  const [validate, setValidate] = useState(false)

  const [Data, setData] = useState({
    Name: "",
    Email: "",
    password: "",
    Age: "",
    checkbox: ""
  });
  const handleChange = async (e: any) => {
    setData({ ...Data, [e.target.name]: e.target.value });
  };
  const signSubmit = (e: any) => {
    e.preventDefault()
    setValidate(true);
    dispatch(POST_SIGNUSER(Data))
    dispatch(POST_USER(Data))
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
