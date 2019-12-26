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
                description:'',
                alert:false,
                alertMessage:null,
                error:false
        }

    }

    submitHandler=(e)=>{
        e.preventDefault();
            let fd = new FormData();
                fd.append('picture',this.state.picture,this.state.picture.name);
                fd.append('food_type',this.state.food_type);
                fd.append('price',this.state.price);
                fd.append('available',this.state.available);
                fd.append('description',this.state.description);
                fd.append('quantity',this.state.quantity);
        const config = {     
            headers: { 'content-type': 'multipart/form-data' }
        }
        
        axios.post('/add_menu_items',fd,config)
            .then(response=>{
                this.setState({
                    alertMessage:"Menu item added successfully",alert:true
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

    getPicture = (e) =>{
        this.setState({
            picture:e.target.files[0]
        });
    }

    dismissErrorMessageHandler =()=>{
        this.setState({
            alert:false
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
                                            <Form.Control  name="picture" onChange={this.getPicture}  required type="file"  />
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