import React from "react";
import { Navbar, Nav } from 'react-bootstrap';
import Logout from "./Logout";
import { connect } from 'react-redux';

const NavBar = ({users}) => {

    if((localStorage.token !== undefined) && (users !== undefined)){
      return(
        <div>
  
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
       
        <Navbar.Brand href="/">Fitness</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            {/* <Nav.Link href="/fitness">Fitness</Nav.Link> */}
          
            </Nav>
            <Nav>
            {/* <Nav.Link href="/profile">Profile</Nav.Link> */}
            <Logout/>
            </Nav>
        </Navbar.Collapse>
       
        </Navbar>
        
    </div>
     
      )
    }
    else{
      return(
        <div>
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
       
           <Navbar.Brand href="/">Fitness</Navbar.Brand>
           <Navbar.Toggle aria-controls="responsive-navbar-nav" />
           <Navbar.Collapse id="responsive-navbar-nav">
           <Nav className="me-auto">
           {/* <Nav.Link href="/fitness">Fitness</Nav.Link> */}
         
           </Nav>
           <Nav>
           <Nav.Link href="/login">Login</Nav.Link>
           <Nav.Link href="/logup">Logup</Nav.Link>
           </Nav>
       </Navbar.Collapse>
      
       </Navbar>
        </div>
      )
    }
  
  }
  
  const mapStateToProps = state => {
    return {
      users: state.users.currentUser
    }
  }
  export default connect(mapStateToProps)(NavBar);
