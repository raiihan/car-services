import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const { seviceId } = useParams();
    return (
        <div>
            <h4>Service here {seviceId}</h4>
            <div className="text-center">
                <Link to={'/checkout'}>
                    <button className="btn btn-primary">Procced Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetails;