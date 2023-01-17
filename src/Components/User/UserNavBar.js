import React from 'react';
import { Link } from 'react-router-dom';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText,
  } from 'reactstrap';
  

function UserNavBar() {

  return (
    <div>
      <Navbar 
      color="dark"
      dark
      expand="md"
      fixed="">
        <NavbarBrand href="/">DCA</NavbarBrand>
        
        
          <Nav className="me-auto" navbar>
            <NavItem>
              <Link to="/userRep" className="nav-link">Rep info</Link>
            </NavItem>
            <NavItem>
              <Link to="/prods" className="nav-link">New products</Link>
            </NavItem>
          </Nav>
          <NavbarText>Ennea solution</NavbarText>
        
      </Navbar>
    </div>
    );
  }
  
export default UserNavBar;

