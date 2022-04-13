import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

const Register = () => {

    const handleRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = (e.target.email.value);
        const password = e.target.password.value;

        console.log(name, email, password);
    }
    return (
        <div className='register-form'>
            <h2>Please Register</h2>
            <form onSubmit={handleRegister}>
                <div className='form-input'>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" />
                </div>
                <div className='form-input'>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" required />
                </div>
                <div className='form-input'>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="Password" required />
                </div>
                <button type="submit">Register</button>
            </form>
            <p>Already have account? <Link to="/login">Login</Link></p>
        </div>
    );
};

export default Register;