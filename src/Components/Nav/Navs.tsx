import React from 'react'
import { useNavigate } from "react-router-dom";

import {
    Navbar,
    Container,
    FormControl,
    Button,
    Nav,
    
  } from "react-bootstrap";

const Navs =()=>{   
  let navigate =useNavigate()    
    const handleSubmit=()=>{
      localStorage.removeItem("Access")
      navigate("/Form")
      console.log("logout",localStorage)
    }
  return (
    <div>
      <Navbar bg="success" variant="dark">
     <Container>
      <Navbar.Brand href="">JWT_Learn</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="/">Signup</Nav.Link>
        <Nav.Link href="/Form">POST user</Nav.Link>
        <Button onClick={handleSubmit}>LOGOUT</Button>
        
      </Nav>
      <div className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="info">Search</Button>
      </div>
    </Container>
  </Navbar>
</div>
    
  )
}

export default Navs