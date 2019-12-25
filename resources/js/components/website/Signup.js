import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Container} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import styled from 'styled-components';
import axios from 'axios';
import {Link,Route} from 'react-router-dom';

const Styles = styled.div`
        margin-top:50px;
    `;
 
export default class Signup extends Component{

    constructor(props){
        super(props);
        this.state = {
            first_name: '',
            last_name: '',
            email:'',
            phone:'',
            password:'',
            password_confirm:'',
            alert:false,
            alertMessage:null,
            error:false

        }

    }

    submitHandler =(e)=>{
        e.preventDefault();
        const data = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email,
            phone: this.state.phone,
            password: this.state.password,
            password_confirm: this.state.password_confirm
        }
        axios.post('/register',data)
            .then(response=>{
                this.setState({alertMessage:"Success, A confirmation link is sent to your email",alert:true,
                    first_name:'',last_name:'',email:'',phone:'',password:'',password_confirm:''
                });
                console.log(response.data);

            })
            .catch(error=>{
                this.setState({error:true,alertMessage:error.response.data.message,alert:true});
            })
        
    }

    inputChangeHandler = (e)=>{
        this.setState({
            [e.target.name]:e.target.value
        });
    }

    dismissErrorMessageHandler =()=>{
        this.setState({
            alert:false
        });
    }
    
    render() {
       
        return(
            <Container>
                <Styles>
                    <h3>Signup</h3><hr/>
                    {/* Message Alerts */}
                    {(this.state.alert)?
                        <Row className="justify-content-md-center">
                            <Col lg="6">
                                <Alert variant={(this.state.error)?'danger':'success'} onClose={ this.dismissErrorMessageHandler} dismissible>
                                    <p>
                                        {this.state.alertMessage}
                                    </p>
                                </Alert>
                            </Col>
                        </Row>:''
                    }
                    <Form onSubmit={this.submitHandler}>
                        <Row className="justify-content-md-center">
                            <Col lg="3">
                                <Form.Group  controlId="first_name">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control  name="first_name" onChange={this.inputChangeHandler} value={this.state.first_name} required  type="text" placeholder="" />
                                </Form.Group>
                            </Col>
                            <Col lg="3">
                                <Form.Group  controlId="last_name">
                                    <Form.Label>Last Name</Form.Label>
                                        <Form.Control name="last_name"  onChange={this.inputChangeHandler} value={this.state.last_name} required type="text" placeholder="" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className="justify-content-md-center">
                        <Col lg="3">
                                <Form.Group  controlId="email">
                                    <Form.Label>Emial</Form.Label>
                                        <Form.Control name="email"  onChange={this.inputChangeHandler} value={this.state.email} required type="email" placeholder="" />
                                </Form.Group>
                            </Col>
                            <Col lg="3">
                                <Form.Group  controlId="phone">
                                    <Form.Label>Phone</Form.Label>
                                        <Form.Control name="phone"  onChange={this.inputChangeHandler} required value={this.state.phone}   type="number" placeholder="" />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row className="justify-content-md-center">
                            <Col lg="3">
                                <Form.Group  controlId="password">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control name="password" onChange={this.inputChangeHandler}  value={this.state.password} required  type="password" placeholder="" />
                                </Form.Group>
                            </Col>
                            <Col lg="3">
                                <Form.Group  controlId="password_confirm">
                                    <Form.Label>Password Confirmation</Form.Label>
                                    <Form.Control name="password_confirm" onChange={this.inputChangeHandler} value={this.state.password_confirm} required type="password" placeholder="" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className="justify-content-md-center">
                            <Col lg="6">
                                    <Button variant="primary" type="submit" block>
                                        SignUp
                                    </Button>
                                    <p style={{color:'red'}}>
                                        Already have an account? <Link to="/login">SignIn</Link>
                                    </p>
                            </Col>
                        </Row>
                        
                    </Form>
                </Styles>
            </Container>
        );
    } 
}
