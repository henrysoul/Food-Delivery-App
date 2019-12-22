import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
    .navbar{
        background-color:#098572;
    }
    .navbar-brand, .navbar-nav .nav-link{
        color:white;
        &:hover {
            color: #bbb; 
        }  

    }
`;

export  const NavigationBar = () =>(
    <Styles>
        <Navbar expand="lg">
            <Navbar.Brand href="/">Food Delivery App</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="login">Login</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="signup">Signup</Nav.Link></Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
)