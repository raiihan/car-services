import React from 'react';
import { ToastContainer } from 'react-bootstrap';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';


const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);
    const location = useLocation();
    if (loading || sending) {
        return (
            <Loading />
        );
    }
    if (!user) {
        return <Navigate to={'/login'} state={{ from: location }} replace />
    }

    if (user?.providerData[0]?.providerId === 'password' && !user.emailVerified) {
        return <div>
            <h3 className='text-danger'>Your Email is not Verified</h3>
            <p className='text-info'>Please Verify your email address</p>
            <button className='btn btn-primary'
                onClick={async () => {
                    await sendEmailVerification();
                    toast('Your verification email send check your email')
                }}
            >
                Send verification email
            </button>
            <ToastContainer />
        </div>
    }
    return children;
};

export default RequireAuth;