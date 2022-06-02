import React from 'react'
import {
    Navbar,
    Container,
    FormControl,
    Button,
    Nav,
    
  } from "react-bootstrap";

const Navs =()=>{       
    const handleSubmit=()=>{

    }
  return (
    <div>
      <Navbar bg="success" variant="dark">
     <Container>
      <Navbar.Brand href="">JWT_Learn</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="/">Signup</Nav.Link>
        <Nav.Link href="/Form">Add user</Nav.Link>
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