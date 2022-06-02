import { Form, Field } from "react-final-form";
import Styles from "./Styles";
import { Button } from "react-bootstrap";
import { useState } from "react";
import Popup from "../../Madelpop/Popup";
import React from "react";

const Forms = () => {
  const required = (values: any) => (values ? undefined : "must fil Name");
  const mustBeMail = (values:any) => (values ? undefined : " fil in Email");
  const mustBePass = (values:any) => (values? undefined : "Fill in correct password");
  const mustBeAge = (values:any) => (values ? undefined : " fil in Age");

  const [Show, setShow] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [data, setData] = useState({
    Name: "",
    Email: "",
    password: "",
    Age: ""
  });
  
  const onSubmit = (data:any) => {
    setData(data);
    JSON.stringify(data);
     console.log(data,"value")
    let Data = JSON.parse(localStorage.getItem("Sign")||"{}")
    console.log(Data, "Newww");
    let userData = Data.find(
      (item:any) =>
        item.Name === data.Name &&
        item.Email === data.Email &&
        item.password === data.password &&
        item.Age === data.Age
    );
    console.log(data.Email, "Dayaa");
    console.log(userData, "NewData");

    if (userData) {
      setShowPopup(true);
      setShow(true);
    } else {
      alert("Your Email and Password Miss match");
    }
  };

  return (
    <Styles>
      <Form
        onSubmit={onSubmit}
        initialValues={{ Name: "", Email: "", password: "", Age: "" }}
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
              <Button variant="success" type="submit" disabled={submitting || pristine}>
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
            {Show === true && <Popup passdata={data} show={showPopup} />}
          </form>
        )}
      />
    </Styles>
  );
};
export default Forms;
