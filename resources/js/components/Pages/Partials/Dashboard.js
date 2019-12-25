import React,{ Component } from 'react';
import { Container,Tab } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Sidebar from './Sidebar';
import ContainerWrapper  from '../../StyledComponents/ContainerWrapper';
import ContainerWrapperWithBorder  from '../../StyledComponents/ContainerWrapperWithBorder';

class Dashboard extends Component{
    
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
                                i am here
                            </ContainerWrapperWithBorder>
                        </Col>
                    </Row>
                </ContainerWrapper>
            </Container>

        
            
        );
    }
}
export default Dashboard;
