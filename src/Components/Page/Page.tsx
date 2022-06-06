import React, { useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import "./Page.css";
import { useDispatch, useSelector } from "react-redux";
import { DELETE_USER, GET_USER } from "../Redux/ActionType";
import { useNavigate} from "react-router-dom";


function Page() {
  let navigate =useNavigate()
  const userData = useSelector((state: any) => state.UserReducer.user);
  console.log(userData, "sueee");
  let dispatch: any = useDispatch();

  useEffect(() => {
    if (userData !== undefined) {
      dispatch(GET_USER());
    }
  }, []);

  const handleEdit = (e: any,data:any) => {
    e.preventDefault();
    navigate(`/Edit/${data}`)
    console.log(data,"edit");
  };

  const handleDelete = (e: any, data: any) => {
    e.preventDefault();
    dispatch(DELETE_USER(data));
    dispatch(GET_USER());
  };

  return (
    <div>
      <h1>Welcome My Home Page</h1>
      <div className="row sm-6 col-md-8">
        <div className="col-12 sm-6 ">
          <div className="row">
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

