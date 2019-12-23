import React from 'react'
import {Container} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';

const Styles = styled.div`
    margin-top:50px;
`;

export  const Signup = () =>(
    <Container>
        <Styles>
        <h3>Signup</h3><hr/>
            <Form>
                <Row className="justify-content-md-center">
                    <Col lg="3">
                        <Form.Group  controlId="formBasicEmail">
                            <Form.Label>Name</Form.Label>
                                <Form.Control   type="text" placeholder="Enter name" />
                        </Form.Group>
                    </Col>
                    <Col lg="3">
                        <Form.Group  controlId="formBasicEmail">
                            <Form.Label>Emial</Form.Label>
                                <Form.Control   type="email" placeholder="Enter email" />
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col lg="6">
                        <Form.Group  controlId="formBasicEmail">
                            <Form.Label>Phone</Form.Label>
                                <Form.Control   type="number" placeholder="Enter phone" />
                        </Form.Group>
                    </Col>
                </Row>

                <Row className="justify-content-md-center">
                    <Col lg="3">
                        <Form.Group  controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control  type="password" placeholder="Password" />
                        </Form.Group>
                    </Col>
                    <Col lg="3">
                        <Form.Group  controlId="formBasicPassword">
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
)