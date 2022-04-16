import React from 'react';
import google from '../sociallogin-png/Google-PNG-File.png';
import facebook from '../sociallogin-png/facebook.png';
import github from '../sociallogin-png/github-icon.jpg';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';


const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate();
    let errorElement;

    if (loading || loading) {
        return <Loading></Loading>
    }

    if (error || error1) {

        errorElement =
            <p className='text-danger'>Error: {error?.message} {error1?.message}</p>


    }

    if (user || user1) {
        navigate('/home');
    }

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50 my-2'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50 '></div>

            </div>
            {errorElement}
            <div>
                <button onClick={() => signInWithGoogle()} className='btn btn-primary w-50 d-block mx-auto '><img height={30} src={google} alt="" />
                    Google Sign In</button>
            </div>
            <div>
                <button className='btn btn-primary w-50 d-block mx-auto my-2'><img height={30} src={facebook} alt="" />
                    Facebook Sign In</button>
            </div>
            <div>
                <button onClick={() => signInWithGithub()} className='btn btn-primary w-50 d-block mx-auto'><img height={30} src={github} alt="" />
                    Github Sign In</button>
            </div>
        </div>
    );
};

export default SocialLogin;