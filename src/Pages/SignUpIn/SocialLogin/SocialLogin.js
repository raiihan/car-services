import React from 'react';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import google from '../../../Assets/images/social/google.png';
import facebook from '../../../Assets/images/social/facebook.png';
import github from '../../../Assets/images/social/github.png';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, userGithub, loadingGithub, errorGithub] = useSignInWithGithub(auth);
    const navigate = useNavigate();
    let errorElement;
    if (error || errorGithub) {
        errorElement = (<div>
            <p className='text-danger'>Error: {error?.message} {errorGithub?.message}</p>
        </div>)
    }
    if (user || userGithub) {
        return (
            navigate('/home')
        );
    }
    return (
        <>
            {
                loading
                    ?
                    <p>Loading...</p>
                    :

                    <>
                        <div className='d-flex  align-items-center'>
                            <div style={{ height: '1px' }} className='bg-primary w-50' ></div>
                            <p className='mt-2 px-2'>or</p>
                            <div style={{ height: '1px' }} className='bg-primary w-50' ></div>
                        </div>
                        {errorElement}
                        <div>
                            <button
                                onClick={() => signInWithGoogle()}
                                className="btn btn-success d-block mx-auto w-50 my-2">
                                <img src={google} alt="" />
                                <span className='px-2'> Google Sign In</span>

                            </button>
                        </div>
                        <div>
                            <button className="btn btn-success d-block mx-auto w-50 my-2">
                                <img width={30} src={facebook} alt="" />
                                <span className='px-2'>Facebook Sign In</span>
                            </button>
                        </div>
                        <div>
                            <button
                                onClick={() => signInWithGithub()}
                                className="btn btn-success d-block mx-auto w-50">
                                <img width={30} src={github} alt="" />
                                <span className='px-2'>Github Sign In</span>
                            </button>
                        </div>
                    </>
            }
        </>
    );
};

export default SocialLogin;