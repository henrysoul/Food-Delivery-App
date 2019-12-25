import React,{Component} from 'react';
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
import Sidebar from '../Partials/Sidebar';
import ContainerWrapper  from '../../StyledComponents/ContainerWrapper';
import ContainerWrapperWithBorder  from '../../StyledComponents/ContainerWrapperWithBorder';

class AddMenuItems extends Component {

    constructor(props){
        super(props);
        this.state = {
                food_type: '',
                price: '',
                available:'',
                quantity:'',
                picture:'',
                description:''
        }

    }

    submitHandler=(e)=>{
        e.preventDefault();
        console.log(this.state)
        // data = this.state.formData
        // axios.post('/add_menu_items',)       
    }

    inputChangeHandler = (e)=>{

        if(e.target.name === "picture"){
            this.setState({
                [e.target.name]:e.target.files[0]
            });
        
        }
        this.setState({
            [e.target.name]:e.target.value
        });
    }

    render(){
        return(
            <Container id="list-group-tabs-example">
                <ContainerWrapper>
                    <Row>
                        <Col sm="4" > 
                            <Sidebar/>
                        </Col>
                        <Col sm="8" >
                            <ContainerWrapperWithBorder>
                            <Form onSubmit={this.submitHandler}>
                                <Row>
                                    <Col lg="4">
                                    <Form.Group controlId="food_type">
                                        <Form.Label>Food Type</Form.Label>
                                        <Form.Control as="select" name="food_type" onChange={this.inputChangeHandler} required>
                                            <option value ="">--Select</option>
                                            <option value ="Swallow" >Swallow</option>
                                            <option value="Drinks" >Drinks</option>
                                            <option value="Fries" >Fries</option>
                                            <option value="Baked">Baked</option>
                                        </Form.Control>
                                    </Form.Group>
                                    </Col>
                                    <Col lg="4">
                                        <Form.Group  controlId="price">
                                            <Form.Label>Price</Form.Label>
                                            <Form.Control name="price" onChange={this.inputChangeHandler}   required  type="number"  />
                                        </Form.Group>
                                    </Col>
                                    <Col lg="4">
                                        <Form.Group  controlId="available">
                                            <Form.Label>Available</Form.Label>
                                            <Form.Control as="select" onChange={this.inputChangeHandler} name="available" required>
                                                <option value ="">--Select--</option>
                                                <option value ="1">Yes</option>
                                                <option value="0" >No</option>
                                            </Form.Control>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg="4">
                                        <Form.Group  controlId="quantity">
                                            <Form.Label>Quantity</Form.Label>
                                            <Form.Control name="quantity" onChange={this.inputChangeHandler}  required type="number" placeholder="" />
                                        </Form.Group>
                                    </Col>
                                    <Col lg="4">
                                        <Form.Group  controlId="picture">
                                            <Form.Label>Picture</Form.Label>
                                            <Form.Control  name="picture" onChange={this.inputChangeHandler}  required type="file"  />
                                        </Form.Group>
                                    </Col>
                                    <Col lg="4">
                                        <Form.Group  controlId="description">
                                            <Form.Label>Description</Form.Label>
                                            <Form.Control name="description" as="textarea" rows="3" onChange={this.inputChangeHandler}  required type="text" placeholder="" />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Button style={{float:'right'}} type="submit" variant="primary">Submit</Button>
                                    </Col>
                                </Row>
                            </Form>
                            </ContainerWrapperWithBorder>
                        </Col>
                    </Row>
                </ContainerWrapper>
            </Container>
        );
    }

}

export default AddMenuItems;