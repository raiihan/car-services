import React from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const { seviceId } = useParams();
    return (
        <div>
            <h4>Service here {seviceId}</h4>
        </div>
    );
};

export default ServiceDetails;