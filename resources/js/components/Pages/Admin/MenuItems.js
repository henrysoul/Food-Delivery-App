import React,{ Component } from 'react';
import { Container,Tab } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import Badge from 'react-bootstrap/Badge';
import Form from 'react-bootstrap/Form';
import Sidebar from '../Partials/Sidebar';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';
import Dropdown from 'react-bootstrap/Dropdown';
import ContainerWrapper  from '../../StyledComponents/ContainerWrapper';
import ContainerWrapperWithBorder  from '../../StyledComponents/ContainerWrapperWithBorder';
import Spinner  from '../../StyledComponents/Spinner';

class MenuItem extends Component{
    state = {
        items:[],
        alert:false,
        alertMessage:null,
        error:false,
        showSpinner: true,
        showModal:false,
        id: '',
        food_type:'',
        price:'',
        quantity:'',
        available:'',
        description:'',
        picture:'',
        pictureChanged:false,
        

      }
    componentDidMount(){
        axios.get('/menu_items')
          .then(response=>{
              console.log(response.data.data);
            this.setState({items:response.data.data,showSpinner:!this.state.showSpinner})
          })
          .catch(error=>{
            this.setState({error:true,alertMessage:"Something went wrong",alert:true});
          });
    }
    dismissErrorMessageHandler =()=>{
        this.setState({
            alert:false
        });
    }
    showModalHandler =(id,food_type,price,quantity,available,description,picture)=>{
        this.setState({
            id:id,
            food_type:food_type,
            price:price,
            quantity:quantity,
            available:available,
            description:description,
            picture
        })
        this.setState({
            showModal:!this.state.showModal
        })
    }
    submitHandler=(e)=>{
        e.preventDefault();
        this.setState({showSpinner:!this.state.showSpinner})
            
                let fd = new FormData();
                if(this.state.pictureChanged){
                    fd.append('picture',this.state.picture,this.state.picture.name);
                }else{
                    fd.append('picture',this.state.picture);
                }
                fd.append('food_type',this.state.food_type);
                fd.append('price',this.state.price);
                fd.append('available',this.state.available);
                fd.append('description',this.state.description);
                fd.append('quantity',this.state.quantity);
            
        const config = {     
            headers: { 'content-type': 'multipart/form-data' }
        }
        
        axios.post('/update_menu_item/'+ this.state.id,fd,config)
            .then(response=>{
                try{
                    this.setState({
                        alertMessage:"Menu item updated successfully",alert:true,showSpinner:!this.state.showSpinner
                    });
                }catch(error){
                    console.log(error);
                }

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
            ...this.state,
            picture:e.target.files[0],pictureChanged:!this.state.pictureChanged
        });
        console.log(this.state.picture,this.state.pictureChanged);
    }
    closeModalHandler =( ) =>{
        this.setState({showModal:!this.state.showModal})
    }

    dismissErrorMessageHandler =()=>{
        this.setState({
            alert:false
        });
    }
    deleteItemHandler(id){
        axios.get('/delete_menu_item/'+id)
            .then(response=>{
                try{
                    this.setState({
                        alertMessage:"Menu item deleted successfully",alert:true
                    });
                }catch(error){
                    console.log(error);
                }

            })
            .catch(error=>{
                this.setState({error:true,alertMessage:error.response.data.message,alert:true});
            })  
    }

    
    render(){
        let items = this.state.items.map(item=>{
            return <React.Fragment>
                            <tr key={item.id}>
                                <td >{item.food_type}</td>
                                <td >{item.price}</td>
                                <td >{item.quantity}</td>
                                <td >{item.available?<Badge variant="success">Yes</Badge>:<Badge variant="danger">No</Badge>}</td>
                                <td >{item.description}</td>
                                <td >{item.created_at}</td>
                                <td >{item.updated_at}</td>
                                <td ><Dropdown>
                                    <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                        Action
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item onClick={()=>this.showModalHandler(item.id,item.food_type,item.price,item.quantity,item.available,item.description,item.picture)}>Edit/View</Dropdown.Item>
                                        <Dropdown.Item onClick={() => {if(window.confirm('Delete the item?')){this.deleteItemHandler(item.id)};}}>Delete</Dropdown.Item>
                                    </Dropdown.Menu>
                                    </Dropdown>
                                </td>
                            </tr>
                    </React.Fragment>
          })

          let spinner = "";
          if(this.state.showSpinner){
            spinner = <Spinner/>
          }
        return(
            <Container id="list-group-tabs-example">
                <ContainerWrapper>
                    <Row>
                        <Col sm="4" >
                            <Sidebar/>
                        </Col>
                        <Col sm="8" >
                            <ContainerWrapperWithBorder>
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
                            <Table striped bordered hover size="sm" responsive>
                            
                                <thead>
                                    <tr>
                                    <th>FoodType</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Available</th>
                                    <th>Description</th>
                                    <th>Created At</th>
                                    <th>Updated At</th>
                                    <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {items}
                                </tbody>
                                </Table>
                                
                                {spinner}

                                
                                <Modal show={this.state.showModal} onHide={this.closeModalHandler}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Edit Item</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                    <Form onSubmit={this.submitHandler}>
                                        {/* Message Alerts */}
                                            {(this.state.alert)?
                                                <Row className="justify-content-md-center">
                                                    <Col lg="12">
                                                        <Alert variant={(this.state.error)?'danger':'success'} onClose={ this.dismissErrorMessageHandler} dismissible>
                                                            <p>
                                                                {this.state.alertMessage}
                                                            </p>
                                                        </Alert>
                                                    </Col>
                                                </Row>:''
                                            }
                                            {spinner}
                                        <Row>
                                            <Col lg="4">
                                            <Form.Group controlId="food_type">
                                                <Form.Label>Food Type</Form.Label>
                                                <Form.Control as="select"  defaultValue={this.state.food_type} name="food_type" onChange={this.inputChangeHandler} required>
                                                    <option value ="">--Select</option>
                                                    <option value="Swallow"  >Swallow</option>
                                                    <option value="Drinks"  >Drinks</option>
                                                    <option value="Fries" >Fries</option>
                                                    <option value="Baked">Baked</option>
                                                </Form.Control>
                                            </Form.Group>
                                            </Col>
                                            <Col lg="4">
                                                <Form.Group  controlId="price">
                                                    <Form.Label>Price</Form.Label>
                                                    <Form.Control name="price" defaultValue={this.state.price} onChange={this.inputChangeHandler}   required  type="number"  />
                                                </Form.Group>
                                            </Col>
                                            <Col lg="4">
                                                <Form.Group  controlId="available">
                                                    <Form.Label>Available</Form.Label>
                                                    <Form.Control as="select"  defaultValue={this.state.available} onChange={this.inputChangeHandler} name="available" required>
                                                        <option value ="">--Select--</option>
                                                        <option value ="1" >Yes</option>
                                                        <option value="0" >No</option>
                                                    </Form.Control>
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col lg="4">
                                                <Form.Group  controlId="quantity">
                                                    <Form.Label>Quantity</Form.Label>
                                                    <Form.Control name="quantity" defaultValue={this.state.quantity} onChange={this.inputChangeHandler}  required type="number" placeholder="" />
                                                </Form.Group>
                                            </Col>
                                            <Col lg="4">
                                                <Form.Group  controlId="picture">
                                                    <Form.Label>Picture</Form.Label>
                                                    <Form.Control  name="picture" onChange={this.getPicture}  type="file"  />
                                                </Form.Group>
                                            </Col>
                                            <Col lg="4">
                                                <Form.Group  controlId="description">
                                                    <Form.Label>Description</Form.Label>
                                                    <Form.Control name="description" defaultValue={this.state.description} as="textarea" rows="3" onChange={this.inputChangeHandler}  required type="text" placeholder="" />
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col xs={6} md={4}>
                                            {/* <Image src={require()} thumbnail  /> */}
                                            <Image src="images/photo5e04c231e330d.JPG" thumbnail  />
                                            <img src="images/photo5e04c231e330d.JPG"/>
                                            </Col>
                                        </Row>
                                        <Modal.Footer>
                                            <Button variant="secondary" onClick={this.closeModalHandler}>
                                                Close
                                            </Button>
                                            <Button variant="primary" type="submit">
                                                Save 
                                            </Button>
                                            </Modal.Footer>
                                    
                                    </Form>
                                    </Modal.Body>
                                   
                                </Modal>
                            </ContainerWrapperWithBorder>
                        </Col>
                    </Row>
                </ContainerWrapper>
            </Container>

        
            
        );
    }
}
export default MenuItem;
