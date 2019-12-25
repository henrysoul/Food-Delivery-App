import React from 'react';
import styled from 'styled-components';

const Styles = styled.div`
    margin-top:50px;
`;

const  ContainerWrapper = (props) =>(
    <Styles>
        {props.children}
    </Styles>
);

export default ContainerWrapper;