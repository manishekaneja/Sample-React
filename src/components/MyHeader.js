import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';


export default class MyHeader extends Component {

    getLinks() {
        if (this.props.loggedIn === true) {
            return (
                <Nav pullRight>
                    <NavItem eventKey={1} href="#">  <Link to='/' style={{ color: 'white' }}> Home</Link></NavItem>
                    <NavItem eventKey={2} href="#">  <Link to='/dashboard' style={{ color: 'white' }}> Dashboard</Link></NavItem>
                    <NavItem eventKey={3} href="#">  <Link to='/list' style={{ color: 'white' }}>List</Link></NavItem>
                    <NavItem eventKey={4} href="#">  <Link to='/schedule' style={{ color: 'white' }}>Schedule</Link></NavItem>
                    <NavItem eventKey={4} href="#" onClick={() => { localStorage.clear();this.props.log(false); }}>  <Link to='/login' style={{ color: 'white' }}>Log Out</Link></NavItem>

                </Nav>

            )
        }
        else {

            return (
                <Nav pullRight>
                    <NavItem eventKey={1} href="#">  <Link to='/' style={{ color: 'white' }}> Home</Link></NavItem>
                    <NavItem eventKey={2} href="#">  <Link to='/login' style={{ color: 'white' }}> Login</Link></NavItem>
                </Nav>
            )
        }
    }
    render() {
        return (
            <Navbar inverse collapseOnSelect >
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to='/' style={{ color: 'white' }}> My Sample</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>

                    {this.getLinks()}
                </Navbar.Collapse>
            </Navbar>
        );
    }
}