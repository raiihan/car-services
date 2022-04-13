import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './Register.css';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    if (user) {
        navigate('/');
    }
    const handleRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = (e.target.email.value);
        const password = e.target.password.value;
        createUserWithEmailAndPassword(email, password)
    }
    return (
        <div className='register-form'>
            <h2>Please Register</h2>
            <form onSubmit={handleRegister}>
                <div className='form-input'>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" placeholder='Your name' />
                </div>
                <div className='form-input'>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" placeholder='Your Email' required />
                </div>
                <div className='form-input'>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="Password" placeholder='Password' required />
                </div>
                <button type="submit" className='register-btn'>Register</button>
            </form>
            <p>Already have account? <Link to="/login">Login</Link></p>
            <SocialLogin />
        </div>
    );
};

export default Register;