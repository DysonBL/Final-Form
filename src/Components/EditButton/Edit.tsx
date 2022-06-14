import React, { useEffect } from "react";
import { Card } from "react-bootstrap";
import { TextField, Button } from "@mui/material";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch} from "react-redux";
import {  PUT_USER } from "../Redux/ActionType";
import axios from "axios";

const Edit = () => {
  console.log("EDIT POPUP")
  let dispatch:any = useDispatch();
  let navigate = useNavigate();
  const [putData,setPutData]= useState<any>()
  const [Data, setData] = useState<any>({
    Name: '',
    Email:"",
    Age: ""
  });

  const handleChange = (e: any) => {
    setData({ ...Data, [e.target.name]: e.target.value });
    console.log(Data, "Initial Data");
  };

  let { id } = useParams();
  console.log("newid",id);

  useEffect(()=>{
    axios
    .get(`http://localhost:3002/Data/${id}`)
    .then((res) => {
      console.log(res.data.Data, "GetuserApiFrom Edit");
      setPutData(res.data.Data)
    })
    .catch((error) => {
      console.log(error, "getapiErrorFrom Edit");
    });
  },[])
  console.log(putData,"setPutData");
  
  useEffect(() => {
    if (putData) {
      setData(putData);
    }
  }, [putData]);
  console.log(Data, "EDITData");

  const handleCreate = (e:any) => {
    e.preventDefault();
    dispatch(PUT_USER(Data.id,Data))
    navigate("/Page");
  };
  return (
    <>
      <div className=" row-6 row-md-6">
        <div className="col-9">
          <Card style={{ width: "48rem" }} className="bg-dark text-white">
            <Card.Img src="https://sm.mashable.com/t/mashable_in/help/h/how-to-cha/how-to-change-your-snapchat-user-name_wstd.1248.png" />
            <Card.ImgOverlay>
              <Card.Title>
                <h1>EDIT USER DETAILS</h1>
              </Card.Title>
              <Card.Text style={{ margin: "7rem" }}>
                <div>
                  {" "}
                  <TextField
                    label="Name"
                    value={Data.Name}
                    onChange={handleChange}
                    name="Name"
                  />
                </div>
                <div>
                  {" "}
                  <TextField
                    label="Email"
                    value={Data.Email}
                    onChange={handleChange}
                    name="Email"
                  />{" "}
                </div>
                {/* <div>
                  {" "}
                  <TextField
                    label="Age"
                    value={Data.Age}
                    onChange={handleChange}
                    name="Age"
                  />
                </div> */}
              </Card.Text>
              <Card.Text></Card.Text>
            </Card.ImgOverlay>
            <Button className="text-white" onClick={handleCreate}>
              SAVE EDIT
            </Button>
          </Card>
        </div>
      </div>
    </>
  );
};
export default Edit;
