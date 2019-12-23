import React, {Component} from 'react'
import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';


const Styles = styled.div`
    margin-top:50px;
`;


export default class Login extends Component {

    render(){
        return(
            <Container>
                <Styles>
                    <h3>Login</h3><hr/>
                    <Form>
                        <Row className="justify-content-md-center">
                            <Col lg="6">
                                <Form.Group  controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                        <Form.Control   type="email" placeholder="Enter email" />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row className="justify-content-md-center">
                            <Col lg="6">
                                <Form.Group  controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
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