import React from 'react';
import Spinner from 'react-bootstrap/Spinner'

const Loading = () => {
    return (
        <div style={{ height: '350px' }} className="d-flex justify-content-center align-items-center">
            <Spinner animation="grow" variant="primary" />
        </div>
    );
};

export default Loading;