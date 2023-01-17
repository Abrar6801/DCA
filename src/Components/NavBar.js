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
  

function NavBar() {

  return (
    <div>
      <Navbar 
      color="dark"
      dark
      expand="md"
      fixed="">
        <NavbarBrand><Link to="/login" className="nav-link">DCA</Link></NavbarBrand>
        
        
          <Nav className="me-auto" navbar>
            
            <NavItem>
              <Link to="/signUp" className="nav-link">
                Sign up
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/adminLogin" className="nav-link">
                Admin
              </Link>
            </NavItem>
          </Nav>
          <NavbarText>Ennea solution</NavbarText>
        
      </Navbar>
    </div>
    );
  }
  
export default NavBar;

