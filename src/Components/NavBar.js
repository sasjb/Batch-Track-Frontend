import React from 'react';
import {Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";

function NavBar(props) {
    return (
        <Navbar collapseOnSelect expand="sm">
            <Navbar.Toggle className="custom-hamburger" aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse className="justify-content-center" id="responsive-navbar-nav">
                <Nav className="nav">
                    <Nav.Link><Link to="/" >Request</Link></Nav.Link>
                    <Nav.Link><Link to="/allStatus" >All Status</Link></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBar;
