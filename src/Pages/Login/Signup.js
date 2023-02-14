import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from "react-router-dom";
import auth from '../../Firebase/Firebase.init';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import Loading from '../../Loading/Loading';
import toast from 'react-hot-toast';
import useToken from '../../hooks/useToken';


const Signup = () => {
    const [createUserEmail, setCreateUserEmail] = useState('')
    const [token] = useToken(createUserEmail)

    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [updateProfile, uError] = useUpdateProfile(auth);
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

    let signUpError;
    if (error || uError || gError) {
        signUpError = <article><small>{error?.message || uError?.message || gUser?.message}</small></article>
    }

    if (user || gUser) {
        navigate('/')
    }

    if (token) {
        navigate('/')
    }

    if (loading || gLoading) {
        return <Loading></Loading>
    }

    const handleSignUp = data => {
        createUserWithEmailAndPassword(data.email, data.password)
        updateProfile({ displayName: data.name })
        saveUser(data.name, data.email)
        toast('User create successfully')
        console.log('My displayName is', data.name)
    };

    const saveUser = (name, email) => {
        const user = { name, email };
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                setCreateUserEmail(email)
            })
    }

    return (
        <div className='h-[600px] flex justify-center items-center'>
            <div className='w-96 p-6'>
                <h4 className='font-normal text-xl text-center mb-9'>Sign Up</h4>
                <form onSubmit={handleSubmit(handleSignUp)}>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text"
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: 'Name is required'
                                }
                            })}
                            placeholder="Your name"
                            className="input input-bordered w-full" />
                        <label className="label">
                            {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                        </label>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email"
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: 'email is required'
                                },

                                pattern: {
                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message: 'provide a valid Email'
                                }
                            })}
                            placeholder="Your email"
                            className="input input-bordered w-full" />
                        <label className="label">
                            {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                        </label>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password"
                            {...register("password", {
                                required: {
                                    value: true,
                                    message: 'password is required'
                                },

                                minLength: {
                                    value: 8,
                                    message: 'Password should be at least 8 character length',
                                }
                            })}
                            placeholder="password"
                            className="input input-bordered w-full" />

                        <label className="label">
                            {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                        </label>
                    </div>
                    <input className='btn btn-accent w-full mb-3' type="submit" value="Signup" />
                    <p className='text-red-600'>{signUpError}</p>
                    <p><small>Already have an account? </small> <Link className='text-secondary' to="/login">Please Login</Link></p>
                </form>
                <div className='divider'>OR</div>
                <button onClick={() => signInWithGoogle()} className='btn btn-outline w-full uppercase text-white'>Continue with google</button>
            </div>
        </div>
    );
};

export default Signup;