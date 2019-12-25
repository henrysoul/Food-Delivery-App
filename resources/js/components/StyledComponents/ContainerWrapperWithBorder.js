import React from 'react';
import styled from 'styled-components';

const Styles = styled.div`
    padding:15px;
    background-color:rgb(255, 255, 255);
`;

const  ContainerWrapperWithBorder = (props) =>(
    <Styles>
        {props.children}
    </Styles>
);

export default ContainerWrapperWithBorder;