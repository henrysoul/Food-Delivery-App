import React, {Component} from 'react'
import { Container } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import styled from 'styled-components';
import axios from 'axios';
import { connect } from 'react-redux';
import { userLoginFetch } from '../Auth/loginaction';
import * as actionTypes from '../../store/actions';
import { Redirect } from 'react-router-dom';

const Styles = styled.div`
    margin-top:50px;
`;

class  Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
        }

    }

    submitHandler=(e)=>{
        e.preventDefault();
        const data = {
            email: this.state.email,
            password: this.state.password,
        }
        this.props.userLoginFetch(data)        
    }

    inputChangeHandler = (e)=>{
        this.setState({
            [e.target.name]:e.target.value
        });
    }



    render(){
        
        return(
            <Container>
                <Styles>
                    <h3>Login</h3><hr/>
                    {this.props.auth.isAuthenticated?<Redirect to="/dashboard"/>:''}
                    {/* Message Alerts */}
                    {(this.props.auth.alert)?
                        <Row className="justify-content-md-center">
                            <Col lg="6">
                                <Alert variant={(this.props.auth.error)?'danger':'success'} onClose={ this.props.dismissErrorMessageHandler } dismissible>
                                    <p>
                                        {this.props.auth.alertMessage}
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
const mapStateToProps = state =>{
    return {
        auth: state.auth
    };
}

const loginUser  = (user) =>({
    type: LOGIN_USER,
    payload :token
});

const mapDispatchToProps = dispatch => ({
    userLoginFetch: userInfo => dispatch(userLoginFetch(userInfo)),
    dismissErrorMessageHandler:()=>dispatch({ type:actionTypes.DISMISS_ALERT})
})
export default  connect(mapStateToProps,mapDispatchToProps)(Login);