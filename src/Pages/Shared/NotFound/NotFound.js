import React from 'react';
import lazy from '../../../Assets/images/lazy.jpg';

const NotFound = () => {
    return (
        <div className='text-center'>
            <h2 className='text-success'>Machanic is Slepping Don't Distrub</h2>
            <img src={lazy} alt="" />
        </div>
    );
};

export default NotFound;