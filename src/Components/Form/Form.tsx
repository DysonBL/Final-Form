import { Form, Field } from "react-final-form";
import Styles from "./Styles";
import { Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import Popup from "../Madelpop/Popup";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { GET_USER,POST_LOGUSER } from "../Redux/ActionType";
import { v4 as uuidv4 } from 'uuid';

const Forms = () => {
  const required = (values: any) => (values ? undefined : "must fil Name");
  const mustBeMail = (values: any) => (values ? undefined : " fil in Email");
  const mustBePass = (values: any) =>
    values ? undefined : "Fill in correct password";
  const mustBeAge = (values: any) => (values ? undefined : " fil in Age");

  const [Show, setShow] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const userData = useSelector((state: any) => state.UserReducer.user);

  let dispatch: any = useDispatch();

  const [data, setData] = useState({
    id:uuidv4(),
    Name: "",
    Email: "",
    password: "",
    Age: ""
  });
  console.log(data,"loginData")
  const onSubmit = (data: any) => {
    setData(data);
    JSON.stringify(data);
    let Data = JSON.parse(localStorage.getItem("Sign") || "{}");
    let userData = Data.find(
      (item: any) =>
        item.Name === data.Name &&
        item.Email === data.Email &&
        item.password === data.password &&
        item.Age === data.Age 

    );
    if (userData) {
      setShowPopup(true);
      setShow(true);
      dispatch(POST_LOGUSER(data))
      dispatch(GET_USER())
    } else {
      alert("Your Email and Password Miss match");
    }
  };
  useEffect(() => {
    if(userData !== undefined){
      dispatch(GET_USER());
    }
  }, []);


  return (
    <Styles>
      <Form
        onSubmit={onSubmit}
        initialValues={{ Name: "", Email: "", password: "", Age: "",id:"" }}
        render={({ handleSubmit, form, submitting, pristine }) => (
          <form onSubmit={handleSubmit}>
            <h1>Final Form</h1>
            <hr />
            <div>
              <Field name="Name" validate={required}>
                {({ input, meta }) => (
                  <div>
                    <label className="lable"> Name</label>
                    <input {...input} type="text" placeholder="Name" />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
            </div>

            <div>
              <Field name="Email" validate={mustBeMail}>
                {({ input, meta }) => (
                  <div>
                    <label className="lable">Email</label>
                    <input {...input} type="text" placeholder="abc@gmail.com" />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
            </div>
            <div>
              <Field name="password" validate={mustBePass}>
                {({ input, meta }) => (
                  <div>
                    <label className="lable">paswd</label>
                    <input {...input} type="password" placeholder="password" />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
            </div>
            <div>
              <Field name="Age" validate={mustBeAge}>
                {({ input, meta }) => (
                  <div>
                    <label className="lable">Age</label>
                    <input {...input} type="number" placeholder="your age is" />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
            </div>

            <div className="buttons">
              <Button
                variant="success"
                type="submit"
                disabled={submitting || pristine}
              >
                submit
              </Button>
              <Button
                variant="info"
                type="button"
                onClick={form.reset}
                disabled={submitting || pristine}
              >
                Reset
              </Button>
            </div>
            {Show === true && <Popup passdata={userData} show={showPopup} />}
          </form>
        )}
      />
    </Styles>
  );
};
export default Forms;

