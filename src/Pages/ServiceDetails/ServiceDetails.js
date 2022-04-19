import React from 'react';
import { Link, useParams } from 'react-router-dom';
import PageTitle from '../Shared/PageTitle/PageTitle';

const ServiceDetails = () => {
    const { seviceId } = useParams();
    return (
        <div>
            <PageTitle title={'Service Details'} />
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