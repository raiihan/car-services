import React from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const params = useParams();
    return (
        <div>
            <h4>Service here {params.seviceId}</h4>
        </div>
    );
};

export default ServiceDetails;