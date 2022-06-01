import { Form, Field } from "react-final-form";
import Styles from "./Styles";
import { Button } from "react-bootstrap";
import { useState } from "react";
import Popup from "../../Madelpop/Popup";

const Forms = () => {
  const required = (values) => (values ? undefined : "must fil Name");
  const mustBeMail = (values) => (values ? undefined : "must fil Email");
  const mustBePass = (values) =>
    isNaN(values) ? undefined : "only number feild";

  const [Show, setShow] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [data, setData] = useState({
    Name: "",
    Email: "",
    password: "",
    Age: "",
  });
  const onSubmit = (data) => {
    setData(data);
    JSON.stringify(data);
    console.log(data,"value")
    let Data = localStorage.getItem("Sign");
    console.log(Data, "Dataa");
    let newDatas = JSON.parse(Data);
    console.log(newDatas, "Newww");
    let userData = newDatas.find(
      (item) =>
        item.Name === data.Name &&
        item.Email === data.Email &&
        item.password === data.password &&
        item.Age === data.Age
    );
    console.log(data.Email, "Dayaa");
    console.log(userData, "NewData");
    console.log(userData, "user");

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
        render={({ handleSubmit, form, submitting, values, pristine }) => (
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
              <Field name="Age" validate={required}>
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
