import React, {useContext} from 'react';
import {Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";
import LoginContext from "../Context/LoginContext";

function NavBar(props) {

    const {handleClose} = useContext(LoginContext);

    return (
        <Navbar collapseOnSelect expand="sm">
            <Navbar.Toggle className="custom-hamburger" aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse className="justify-content-center" id="responsive-navbar-nav">
                <Nav className="nav">
                    <Nav.Link className="text-primary"><Link to="/" >Request</Link></Nav.Link>
                    <Nav.Link><Link to="/allStatus" >All Status</Link></Nav.Link>
                    <Nav.Link className="text-primary text-decoration-underline" onClick={handleClose}>Login</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBar;

