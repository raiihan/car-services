import React from 'react';
import lazy from '../../../Assets/images/lazy.jpg';
import PageTitle from '../PageTitle/PageTitle';

const NotFound = () => {
    return (
        <div className='text-center'>
            <PageTitle title={'404 Not Found'} />
            <h2 className='text-success'>Machanic is Slepping Don't Distrub</h2>
            <img src={lazy} alt="" />
        </div>
    );
};

export default NotFound;