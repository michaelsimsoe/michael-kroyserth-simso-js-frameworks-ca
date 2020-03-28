import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { IndexLinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";

export const Header = (props) => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand><Link to="/">TopGames</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav activeKey="/" className="ml-auto">
            <IndexLinkContainer to="/">
              <Nav.Link active={false}>Home</Nav.Link>
            </IndexLinkContainer>
            <IndexLinkContainer to="/favourites">
              <Nav.Link active={false}>Favourites</Nav.Link>
            </IndexLinkContainer>
            <IndexLinkContainer to="/contact">
              <Nav.Link active={false}>Contact</Nav.Link>
            </IndexLinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}
