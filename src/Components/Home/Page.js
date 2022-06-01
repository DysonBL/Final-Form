
import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";

function Page() {
  const [state, setState] = useState([]);
  useEffect(() => {
   localStorage.getItem("Sign")
   console.log(localStorage,"Sign")
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Pages");
    let local = JSON.parse(localStorage);
    setState(local)
    console.log(local,"hiii")

    console.log(state, "states");
  };

  return (
    <div>
      <h1>Welcome</h1>
      <div className="row sm-6 col-md-8">
        <div className="col-12 sm-6 ">
          <div className="row">
            {/* {state &&
              state.map((item) => { */}
                {/* return ( */}
                  <div className="col-4">
                    <Card style={{ width: "25rem" }}>
                      <Card.Img className="cardIimg" variant="top" src=""/>
                      <Card.Body>
                        <Card.Title>Hiiii</Card.Title>
                        <Card.Text>User</Card.Text>
                        <div className="d-flex ">
                          <Button
                            style={{ margin: "2px" }}
                            variant="primary"
                            onClick={handleSubmit}
                          >
                            click
                          </Button>
                        </div>
                      </Card.Body>
                    </Card>
                  </div>
                {/* ); */}
              {/* })} */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
