import React, {Component} from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup'
import {Link,Route} from 'react-router-dom';

class Siderbar extends Component{
    render(){
        return(
                <ListGroup >
                    <Link to="/dashboard"><ListGroup.Item  action >Dashboard</ListGroup.Item></Link>
                    <Link to="/add_user"><ListGroup.Item action >Add User</ListGroup.Item></Link>
                    <Link to="/add_menu_items"><ListGroup.Item action >Add Menu Items</ListGroup.Item></Link>
                </ListGroup>
        )
    }
}

export default Siderbar;