import React, { useEffect,useState } from "react";
import { Button, Card } from "react-bootstrap";
import "./Page.css";
import { useDispatch } from "react-redux";
import {DELETE_USER,GET_USER} from "../Redux/ActionType";
import { useNavigate} from "react-router-dom";
import axios from "axios";


function Page() {
  let navigate =useNavigate()
  const [userData,setUserData]= useState<any[]>();
  // const userData = useSelector((state: any) => state.UserReducer.user);
  console.log(userData,"userDAtataa");
  let dispatch: any = useDispatch();

  useEffect(() => {
    // if (userData.user !== undefined) {
    //   dispatch(GET_USER());
    // }
    axios
      .get(`http://localhost:3002/Data`)
      .then((res) => {
        console.log(res.data.item, "GetuserApi");
       setUserData(res.data.item)
      })
      .catch((error) => {
        console.log(error, "getapiError");
      });
  }, []);

  const handleEdit = (e: any,data:any) => {
    e.preventDefault();
    navigate(`/Edit/${data}`)
    console.log(data,"edit");
  };

  const handleDelete = (e: any, data: any) => {
    e.preventDefault();
    console.log(data,"deletehandle")
    dispatch(DELETE_USER(data));
    dispatch(GET_USER())
  };

  return (
    <div>
      <h1>Welcome My Home Page</h1>
      <div className="row sm-6 col-md-8">
        <div className="col-12 sm-6 ">
          <div className="row" >
            {userData?.map((data: any) => {
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
                        <li>Id:{data.id}</li>
                      </div>
                      <div className="d-flex ">
                        <Button
                          style={{ marginRight: "2px" }}
                          variant="success"
                          onClick={(e) => handleDelete(e, data.id)}
                        >
                          Del
                        </Button>
                        <Button
                          style={{ marginLeft: "30px" }}
                          variant="success"
                          onClick={(e)=>handleEdit(e,data.id)}
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
      </div>
    </div>
  );
}

export default Page;


