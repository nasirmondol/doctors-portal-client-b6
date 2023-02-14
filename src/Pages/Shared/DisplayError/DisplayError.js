import React from 'react';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import { useNavigate, useRouteError } from 'react-router-dom';
import auth from '../../../Firebase/Firebase.init';

const DisplayError = () => {
    const error = useRouteError()
    const [user] = useAuthState(auth);
    const [signOut] = useSignOut(auth);
    const navigate = useNavigate()

    if (user) {
        navigate('/login')
    }

    return (
        <div>
            <p className='text-red-500'>Something went wrong!!</p>
            <p className='text-red-600'>{error.statusText || error.message}</p>
            <h3 className='text-2xl'> Please <button onClick={() => signOut()} >Sign out</button></h3>
        </div>
    );
};

export default DisplayError;