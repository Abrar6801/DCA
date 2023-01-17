import React from 'react';
import {
    Navbar,
    NavbarBrand,
    Nav,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
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
                <DropdownItem href='/userInfo'>User Info</DropdownItem>
                <DropdownItem href='/blockedUsers'>Bloked User Info</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Reps
              </DropdownToggle>
              <DropdownMenu end>
                <DropdownItem href='/repInfo'>Reps Info</DropdownItem>
                <DropdownItem href='/addRep'>Add Rep</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Products
              </DropdownToggle>
              <DropdownMenu end>
              <DropdownItem href='/adminProd'>All Products</DropdownItem>
                <DropdownItem href='/addProd'>Add Product</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>Admin</NavbarText>
        
      </Navbar>
    </div>
    );
  }
  
export default InfoNavBar;

