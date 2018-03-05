import React from "react";

import {
  Navbar,
  Nav,
  NavItem,
  NavLink, } from 'reactstrap';

export class NavPanel extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
      <Navbar color="faded" fixed="top">
        <Nav>
          <NavItem>
            <NavLink href="/index">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/reports" to="/reports">Reports</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/locations" to="/locations">Locations</NavLink>
          </NavItem>
        </Nav>
       </Navbar>
      </div>
    );
  }
}