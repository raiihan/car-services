import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import './Register.css';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import { async } from '@firebase/util';

const Register = () => {
    const [agree, setAgree] = useState(false);
    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, UpdateError] = useUpdateProfile(auth);
    if (user) {
        console.log('user', user)
    }

    const handleRegister = async e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = (e.target.email.value);
        const password = e.target.password.value;
        // const agree = e.target.terms.checked;

        await createUserWithEmailAndPassword(email, password)
        await updateProfile({ displayName: name });
        navigate('/');
        console.log('Updated profile');
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
                <div >
                    <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                    <label className={`ps-2 ${agree ? '' : 'text-danger'}`} htmlFor="terms">Accept terms and condition</label>
                </div>
                <button
                    disabled={!agree}
                    type="submit"
                    className='register-btn'
                >Register</button>
            </form>
            <p>Already have account? <Link to="/login">Login</Link></p>
            <SocialLogin />
        </div>
    );
};

export default Register;