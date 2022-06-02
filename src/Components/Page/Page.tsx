import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import "./Page.css";
import Edit from "../EditButton/Edit";

function Page() {
  const [state, setState] = useState([]);

  useEffect(() => {
    let Data = JSON.parse(localStorage.getItem("Sign") || "{}");
    // let newDatas = JSON.parse(Data);
    console.log(Data, "User");
    setState(Data);
  }, []);

  const handleEdit = (e:any) => {
    console.log(e,"Pages1");
    let Data = JSON.parse(localStorage.getItem("Sign") || "{}");

    let userData = Data?.filter((item: any) => item.Name === e.Name);
    console.log(userData,"2")
    localStorage.setItem("Sign", JSON.stringify(userData));
    console.log(localStorage,"3")

  };


  const handleDelete = (e: any) => {
    console.log("obj1", e);
    let Data = JSON.parse(localStorage.getItem("Sign") || "{}");
console.log(Data,"local2")
    let userData = Data?.filter((item: any) => item.Name !== e.Name);
console.log(userData,"del3")
    localStorage.setItem("Sign", JSON.stringify(userData));
console.log(localStorage,"remain4")
    setState(userData);

    console.log(userData, "delldataa5");
  };

  return (
    <div>
      <h1>Welcome My Home Page</h1>
      <div className="row sm-6 col-md-8">
        <div className="col-12 sm-6 ">
          <div className="row">
            {state &&
              state.map((Data: any) => {
                return (
                  <div className="col-3">
                    <Card style={{ width: "12rem" }}>
                      <Card.Img
                        className="cardIimg"
                        variant="top"
                        src="https://cdn-icons-png.flaticon.com/512/146/146035.png"
                      />
                      <Card.Body>
                        <hr />
                        <Card.Title>
                          <h3>Welcom User</h3>
                        </Card.Title>
                        <div className="user">
                          <li>Name:{Data.Name}</li>
                          <li>Email:{Data.Email}</li>
                          <li>Age:{Data.Age}</li>
                        </div>
                        <div className="d-flex ">
                          <Button
                            style={{ marginRight: "2px" }}
                            variant="success"
                            onClick={() => handleDelete(Data)}
                          >
                            Del
                          </Button>
                          <Button
                            style={{ marginLeft: "30px" }}
                            variant="success"
                            onClick={handleEdit}
                          >
                            Edit
                            <Edit />
                          </Button>
                        </div>
                      </Card.Body>
                    </Card>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
