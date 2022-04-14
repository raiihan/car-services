import React, { useRef } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import { async } from '@firebase/util';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();
    let errorLogin;

    const from = location.state?.from?.pathname || "/";
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    if (error) {
        errorLogin = <p className='text-danger'>Error: {error?.message} </p>
    }
    if (user) {
        navigate(from, { replace: true })
    }
    const handleSubmit = e => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password)
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        await sendPasswordResetEmail(email);
    }
    return (
        <div className='container w-50 mx-auto'>
            <h2 className='text-center text-primary mt-3'>Please Login</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                {errorLogin}
                <Button
                    variant="success"
                    type="submit" className='w-50 mx-auto d-block my-1'>
                    Login
                </Button>
            </Form>
            <p className='text-center'>New to Car Genius Service? <Link to="/register" className='text-primary text-decoration-none pe-auto'>Please Register</Link></p>
            <p className='text-center'>Forget Password? <Link to="/login" className='text-primary text-decoration-none pe-auto' onClick={resetPassword}>Reset Password</Link></p>
            <SocialLogin />
        </div>
    );
};

export default Login;