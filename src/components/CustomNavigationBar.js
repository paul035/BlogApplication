import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  NavbarToggler,
} from 'reactstrap';
import { NavLink as ReactRouterDomLink } from 'react-router-dom';

const CustomNavigationBar = () => {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <div>
      <Navbar
            color="info"
            dark
            expand="md"
            fixed="">
        <NavbarBrand tag={ReactRouterDomLink} to = "../">MyBlogs</NavbarBrand>
        <NavbarToggler onClick={()=>{setIsOpen(!isOpen)}}/>
        <Collapse isOpen = {isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink tag={ReactRouterDomLink} to = "../about">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={ReactRouterDomLink} to = "../login">
                Login
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={ReactRouterDomLink} to = "../signup">
                Signup
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem tag={ReactRouterDomLink} to = "../services">Services</DropdownItem>
                <DropdownItem>Feedback</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Contact Us</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>PAULSOFTS</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default CustomNavigationBar;