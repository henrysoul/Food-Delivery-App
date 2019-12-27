import React from 'react';
import Spinner from 'react-bootstrap/Spinner'
import Row from 'react-bootstrap/Row'

const Spinners = () =>(
        <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
        </Spinner>
)

export default Spinners;