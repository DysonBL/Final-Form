import React, { useState } from "react";
import { FormControl, Offcanvas, Button } from "react-bootstrap";
const Edit = () => {
  const [Show, setShow] = useState(false);

  const handleShow = () => {
    console.log("slideOpen");
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
    console.log("hi");
  };

  return (
    <>
      <div>
        <Button variant="success" onClick={handleShow}>
          <div className="menu"></div>
          <div className="menu"></div>
          <div className="menu"></div>
        </Button>
      </div>
      <div className="offcanvas">
        <Offcanvas show={Show} onHide={handleClose}>
          <Offcanvas.Header closeButton className="header">
            <Offcanvas.Title>Edit User</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className="slideBody">
            <hr />
            <div>
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </>
  );
};

export default Edit;
