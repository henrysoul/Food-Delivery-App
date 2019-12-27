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

class DeliveryGuys extends Component{
    state = {
        items:[],
        alert:false,
        alertMessage:null,
        error:false,
        showSpinner: true,
      }
    componentDidMount(){
        axios.get('/delivery_guys')
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
        let delivery_guys = this.state.items.map(item=>{
            return <React.Fragment>
                            <tr key={item.id}>
                                <td >{item.name}</td>
                                <td >{item.email}</td>
                                <td >{item.phone}</td>
                                <td >{item.available?<Badge variant="success">Yes</Badge>:<Badge variant="danger">No</Badge>}</td>
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
                            <h6>Add Delivery Guys</h6><hr/>
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
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Phone</th>
                                        <th>Availabile</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {delivery_guys}
                                </tbody>
                                </Table>
                                
                                {spinner}
                            </ContainerWrapperWithBorder>
                        </Col>
                    </Row>
                </ContainerWrapper>
            </Container>

        
            
        );
    }
}
export default DeliveryGuys;
