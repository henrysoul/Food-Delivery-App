import React, {Component} from 'react'
import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import styled from 'styled-components';
import axios from 'axios';

const Styles = styled.div`
    margin-top:50px;
`;


export default class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            alert:false,
            alertMessage:null,
            errror:false
        }

    }

    submitHandler=(e)=>{

        e.preventDefault();
        const data = {
            email: this.state.email,
            password: this.state.password,
        }
        axios.post('/login',data)
            .then(response=>{
                console.log(response);
                this.setState({alertMessage:"Success, A confirmation link is sent to your email",alert:true,
                    first_name:'',last_name:'',email:'',phone:'',password:'',password_confirm:''
                });

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

    render(){
        return(
            <Container>
                <Styles>
                    <h3>Login</h3><hr/>
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
                            <Col lg="6">
                                <Form.Group  controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                        <Form.Control   type="email" value={this.state.email} onChange={this.inputChangeHandler} name="email" placeholder="Enter email" />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row className="justify-content-md-center">
                            <Col lg="6">
                                <Form.Group  controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control  type="password" value={this.state.password} onChange={this.inputChangeHandler} name="password" placeholder="Password" />
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