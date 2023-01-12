import React from 'react';
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
        <NavbarBrand href="/login">DCA</NavbarBrand>
        
        
          <Nav className="me-auto" navbar>
            
            <NavItem>
              <NavLink href="/signUp">
                Sign up
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/adminLogin">
                Admin
              </NavLink>
            </NavItem>
          </Nav>
          <NavbarText>Ennea solution</NavbarText>
        
      </Navbar>
    </div>
    );
  }
  
export default NavBar;

