import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import "./Page.css";
import Edit from "../EditButton/Edit";
import axios from "axios";

function Page() {
  const [User,setUser]=useState([]);

useEffect(()=>{
  axios.get("http://localhost:3006/users")
  .then((res:any)=>{
      console.log(res,"GetuserApi")
      setUser(res.data)
  })
  .catch((error)=>{
    console.log(error,"getapiError")
});
},[])

  const handleEdit = () => {
   
  };

  const handleDelete = () => {


  };
  console.log(User,"stateUser")


  return (
    <div>
      <h1>Welcome My Home Page</h1>
      <div className="row sm-6 col-md-8">
        <div className="col-12 sm-6 ">
          <div className="row">
            {
              User.map((data: any) => {
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
                          <li>Name:{data.Name}</li>
                          <li>Email:{data.Email}</li>
                          <li>Age:{data.Age}</li>
                        </div>
                        <div className="d-flex ">
                          <Button
                            style={{ marginRight: "2px" }}
                            variant="success"
                            onClick={handleDelete}
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
