import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';

const Styles = styled.div`
    .navbar{
        background-color:#f68b1e;
    }
    .navbar-brand, .navbar-nav .nav-link{
        color:white;
        &:hover {
            color: #bbb; 
        }; 

    }
`;

const logoutHandler=()=>{
    localStorage.removeItem('jwtToken');
    localStorage.removeItem('bearer');
    localStorage.removeItem('email');
    localStorage.removeItem('name');
    localStorage.removeItem('group_id');
    localStorage.removeItem('token');
    localStorage.removeItem('Token');
    localStorage.removeItem('phone');
    window.location.replace('/');
}

let items = (
        <React.Fragment>
            <Nav.Item><Nav.Link href="login">Login</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link href="signup">Signup</Nav.Link></Nav.Item>
        </React.Fragment>  
    );
    if(localStorage.bearer){
        items = (
            <React.Fragment>
                <Nav.Item><Nav.Link onClick={logoutHandler}>Logout</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="logout">Checkout</Nav.Link></Nav.Item>
            </React.Fragment>
        )
    }
export  const NavigationBar = () =>(
    <Styles>
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand href="/">Food Delivery App</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
                        {items}
                    </Nav>
                </Navbar.Collapse>
            </Container>  
        </Navbar>
    </Styles>
)