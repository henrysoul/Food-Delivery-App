import React,{Component} from 'react';
import {Container} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import CardDeck from 'react-bootstrap/CardDeck';
import Figure from 'react-bootstrap/Figure';
import CardGroup from 'react-bootstrap/CardGroup';
import ContainerWrapper from '../StyledComponents/ContainerWrapper';
import Spinner from '../StyledComponents/Spinner'


class Home extends Component{
    state = {
        items:[],
        alert:false,
        alertMessage:null,
        error:false,
        showSpinner: true,
        showModal:false,
    }

    
    componentDidMount(){
        axios.get('/menu_website')
          .then(response=>{
              console.log(response.data.data);
            this.setState({items:response.data.data,showSpinner:!this.state.showSpinner})
          })
          .catch(error=>{
            this.setState({error:true,alertMessage:"Something went wrong",alert:true});
          });
    }

    render(){
        let spinner = "";
          if(this.state.showSpinner){
            spinner = <Spinner/>
          }

          let items = this.state.items.map(item=>{
            return
                    <CardDeck>
                    <Card>
                        <Card.Img variant="top" width="243px" height="160px" src={'/images/+items.picture'}/>
                        <Card.Body>
                        <Card.Text>
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">{Props.description}</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" width="243px" height="160px" src='/images/photo5e05c3e7035cd.jpg' />
                        <Card.Body>
                        <Card.Text>
                            This card
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" width="243px" height="160px" src='/images/photo5e05c3e7035cd.jpg' />
                        <Card.Body>
                        <Card.Text>
                            This is a 
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" width="243px" height="160px" src='/images/photo5e063420660d2.jpg' />
                        <Card.Body>
                        <Card.Text>
                            This is a 
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>

                    </CardDeck>
          })
        return (
            <Container>
                <ContainerWrapper>
                    <Row className="justify-content-md-center">{spinner}</Row>
                    <CardDeck>
                        <Card>
                            <Card.Img variant="top" width="243px" height="160px" src='/images/photo5e05c3e7035cd.jpg'/>
                            <Card.Body>
                            <Card.Text>
                                This is a 
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                        <Card>
                            <Card.Img variant="top" width="243px" height="160px" src='/images/photo5e05c3e7035cd.jpg' />
                            <Card.Body>
                            <Card.Text>
                                This card
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                        <Card>
                            <Card.Img variant="top" width="243px" height="160px" src='/images/photo5e05c3e7035cd.jpg' />
                            <Card.Body>
                            <Card.Text>
                                This is a 
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                        <Card>
                            <Card.Img variant="top" width="243px" height="160px" src='/images/photo5e063420660d2.jpg' />
                            <Card.Body>
                            <Card.Text>
                                This is a 
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                        
                    </CardDeck>

                    
                    
                    
                </ContainerWrapper>
            </Container>
        );
    }
}
export default Home