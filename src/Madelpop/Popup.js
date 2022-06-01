import React from "react";
import { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import "./Popup.css";
import { useNavigate } from "react-router-dom";


function Popup(props) {
  let navigate = useNavigate()
  const [popShow, setPopShow] = useState(false);
  const [popData, setPopData] = useState({
    Name: "",
    Email: "",
    password: "",
    Age: "",
  });

  console.log(props, "popopp");

  const handleSubmit = () => {
    console.log("Accept");
    navigate('/Home')
  };
  const onSubmit = () => {
    console.log("Cancel");
    setPopShow(false);
  };

  useEffect(() => {
    if (props.passdata !== undefined) {
      setPopData(props.passdata);
      setPopShow(props.show);
    }
  }, [props.passdata, props.show]);
  return (
    <div className="modal">
      <Modal
        size="sm"
        show={popShow}
        onHide={() => setPopShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">User Info</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul className="users">
            <li>
              {" "}
              Name:<p>{popData.Name}</p>
            </li>
            <li>
              Email:<p>{popData.Email}</p>
            </li>
            <li>
              {" "}
              Password:<p>{popData.password}</p>
            </li>
            <li>
              {" "}
              Age:<p>{popData.Age}</p>
            </li>
          </ul>
          <h4>If the user is correct</h4>
        </Modal.Body>
        <hr />

        <div className="Button">
          <Button onClick={handleSubmit} className="accept" variant="success">
            Accept
          </Button>
          <Button onClick={onSubmit} className="cancel" variant="danger">
            Cancel
          </Button>
        </div>
      </Modal>
    </div>
  );
}

export default Popup;
