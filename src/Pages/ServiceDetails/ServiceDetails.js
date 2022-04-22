import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import PageTitle from '../Shared/PageTitle/PageTitle';

const ServiceDetails = () => {
    const { seviceId } = useParams();
    const [service, setService] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/service/${seviceId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data))
    }, []);
    return (
        <div>
            <PageTitle title={'Service Details'} />
            <h4>You are book about {service.name}</h4>
            <div className="text-center">
                <Link to={'/checkout'}>
                    <button className="btn btn-primary">Procced Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetails;