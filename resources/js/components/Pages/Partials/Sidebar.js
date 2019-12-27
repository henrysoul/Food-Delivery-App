import React, {Component} from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup'
import Accordion from 'react-bootstrap/Accordion'
import Button from 'react-bootstrap/Button'
import {Link,Route} from 'react-router-dom';

class Siderbar extends Component{
    render(){
        return(
                <ListGroup >
                    <Link to="/dashboard"><ListGroup.Item  action >Dashboard</ListGroup.Item></Link>
                    {localStorage.group_id ==300?
                        <React.Fragment>
                            <Accordion>
                                <Card>
                                    <Card.Header>
                                    <Accordion.Toggle as={Card.Header} variant="link" eventKey="0">
                                        Food Menu
                                    </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="0">
                                    <ListGroup >
                                        <Link to="/add_menu_items"><ListGroup.Item action >Add Menu Items</ListGroup.Item></Link>
                                        <Link to="/menu_items"><ListGroup.Item action >Items</ListGroup.Item></Link>
                                    </ListGroup>
                                    </Accordion.Collapse>
                                </Card>
                            </Accordion>
                            <Accordion>
                                <Card>
                                    <Card.Header>
                                    <Accordion.Toggle as={Card.Header} variant="link" eventKey="1">
                                        Users
                                    </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="1">
                                    <ListGroup >
                                        <Link to="/add_delivery_guy"><ListGroup.Item action >Add Delivery Guy</ListGroup.Item></Link>
                                        <Link to="/delivery_guys"><ListGroup.Item action >Delivery Guys</ListGroup.Item></Link>
                                    </ListGroup>
                                    </Accordion.Collapse>
                                </Card>
                            </Accordion>
                        </React.Fragment>:''
                    }
                </ListGroup>
        )
    }
}

export default Siderbar;