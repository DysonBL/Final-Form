import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import "./Page.css";
import { useDispatch } from "react-redux";
import { DELETE_USER, GET_USER } from "../Redux/ActionType";
import { useNavigate } from "react-router-dom";
import axios from "axios";

interface user{
  Name:String,
  Email:String,
  Age:Number,
  id:String|Number
}
function Page() {
  let navigate = useNavigate();
  const [userData, setUserData] = useState<any[]>();

  let dispatch: any = useDispatch();

  useEffect(() => {
    axios
      .get(`http://localhost:3002/Data`)
      .then((res) => {
        console.log(res.data.item, "GetuserApi");
        setUserData(res.data.item);
      })
      .catch((error) => {
        console.log(error, "getapiError");
      });
  }, []);

  const handleEdit = (e: React.MouseEvent<HTMLButtonElement>, data: user) => {
    e.preventDefault();
    navigate(`/Edit/${data}`);
    dispatch(GET_USER());
    console.log(data, "editDataaa");
  };

  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>, data: user) => {
    e.preventDefault();
    console.log(data, "deletehandle");
    dispatch(DELETE_USER(data));
    window.location.reload();
  };

  return (
    <div>
      <h1>Welcome My Home Page</h1>
      <div className="row sm-6 ">
        {userData?.map((data: any) => {
          return (
            <div className="col-3 mx-5 mt-3">
              <Card style={{ width: "20rem" }} className="cardStyle">
                <Card.Img
                  className="cardIimg mt-2"
                  variant="top"
                  src="https://cdn-icons-png.flaticon.com/512/146/146035.png"
                />
                <Card.Body>
                  <hr />
                  <Card.Title>
                    <h3>Welcom User</h3>
                  </Card.Title>
                  <div className="user">
                    <li className="mt-2">Name:{data.Name}</li>
                    <li className="mt-2">Email:{data.Email}</li>
                    {/* <li>Age:{data.Age}</li> */}
                    <li className="mt-2">Id:{data.id}</li>
                  </div>
                  <div className="d-flex mt-3 btnPosition ">
                    <Button
                      style={{ marginRight: "2px" }}
                      variant="danger"
                      className="btnSize"
                      onClick={(e) => handleDelete(e, data.id)}
                    >
                      Delete
                    </Button>
                    <Button
                      style={{ marginLeft: "30px" }}
                      variant="success"
                      className="btnSize"
                      onClick={(e) => handleEdit(e, data.id)}
                    >
                      Edit
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Page;
