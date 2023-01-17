import React from 'react';
import { Link } from 'react-router-dom';
import {
    Navbar,
    NavbarBrand,
    Nav,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    NavbarText,
  } from 'reactstrap';
  

function InfoNavBar() {

  return (
    <div>
      <Navbar 
      color="dark"
      dark
      expand="md"
      fixed="">
        <NavbarBrand href="/">DCA</NavbarBrand>
        
        
          <Nav className="me-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
              Users
              </DropdownToggle>
              <DropdownMenu end>
                <Link to="/userInfo" className="dropdown-item">User Info</Link>
                <Link to="/blockedUsers" className="dropdown-item">Blocked User Info</Link>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Reps
              </DropdownToggle>
              <DropdownMenu end>
                <Link to="/repInfo" className="dropdown-item">Reps Info</Link>
                <Link to="/addRep" className="dropdown-item">Add Rep </Link>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Products
              </DropdownToggle>
              <DropdownMenu end>
                <Link to="/adminProd" className="dropdown-item">All Products</Link>
                <Link to="/addProd" className="dropdown-item">Add Product </Link>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>Admin</NavbarText>
        
      </Navbar>
    </div>
    );
  }
  
export default InfoNavBar;

