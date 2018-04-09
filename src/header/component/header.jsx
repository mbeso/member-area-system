import React, {Component} from 'react';
import {Navbar, NavItem, MenuItem, NavDropdown, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
export default class Header extends Component{
    constructor(props){
        super(props);
    }
    render = () => {
        return(
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">Some org</Link>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <NavItem>
                        <Link to="/members">Members</Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/payments">Payments</Link>
                    </NavItem>
                </Nav>
            </Navbar>
        )
    }
}