import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Container} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';

const Styles = styled.div`
        margin-top:50px;
    `;
 
export default class Signup extends Component{

    handleSubmit =()=>{
        console.log("submitted");
    }
    
    render() {
       
        return(
            <Container>
                <Styles>
                    <h3>Signup</h3><hr/>
                    <Form onSubmit={this.handleSubmit}>
                        <Row className="justify-content-md-center">
                            <Col lg="3">
                                <Form.Group  controlId="name">
                                    <Form.Label>Name</Form.Label>
                                        <Form.Control   type="text" placeholder="Enter name" />
                                </Form.Group>
                            </Col>
                            <Col lg="3">
                                <Form.Group  controlId="email">
                                    <Form.Label>Emial</Form.Label>
                                        <Form.Control   type="email" placeholder="Enter email" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className="justify-content-md-center">
                            <Col lg="6">
                                <Form.Group  controlId="phone">
                                    <Form.Label>Phone</Form.Label>
                                        <Form.Control   type="number" placeholder="Enter phone" />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row className="justify-content-md-center">
                            <Col lg="3">
                                <Form.Group  controlId="password">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control  type="password" placeholder="Password" />
                                </Form.Group>
                            </Col>
                            <Col lg="3">
                                <Form.Group  controlId="confirm_password">
                                    <Form.Label>Password Confirmation</Form.Label>
                                    <Form.Control  type="password" placeholder="Password" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className="justify-content-md-center">
                            <Col lg="6">
                                    <Button variant="primary" type="submit" block>
                                        Login
                                    </Button>
                            </Col>
                        </Row>
                    </Form>
                </Styles>
            </Container>
        );
    } 
}
