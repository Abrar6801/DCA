import React from 'react';
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
              <NavLink href="/UserRep">Rep info</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/prods">New products</NavLink>
            </NavItem>
          </Nav>
          <NavbarText>Ennea solution</NavbarText>
        
      </Navbar>
    </div>
    );
  }
  
export default UserNavBar;

