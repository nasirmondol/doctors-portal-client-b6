import React, { useEffect, useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../Firebase/Firebase.init';
import useToken from '../../hooks/useToken';
import Loading from '../../Loading/Loading';

const Login = () => {
    const [loginUserEmail, setLoginUserEmail] = useState('')
    const [token] =  useToken(loginUserEmail)
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const location = useLocation();
    const navigate = useNavigate();

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);


    let from = location.state?.from?.pathname || "/";


    if(token){
        navigate(from, { replace: true })
    }
    useEffect(() => {
        if (user || gUser) {
            navigate(from, { replace: true })
        }
    }, [user, gUser])

    let signInError;
    if (error || gError) {
        signInError = <article className='text-red-500'><small>{error?.message || gError?.message}</small></article>
    }

    if (loading || gLoading || sending) {
        return <Loading />
    }

    const handleLogin = async (data) => {
        await signInWithEmailAndPassword(data.email, data.password)
        await setLoginUserEmail(data.email)
    }


    return (
        <div className='h-[500px] flex justify-center items-center'>
            <div className='w-96 p-6'>
                <h4 className='font-normal text-xl text-center mb-9'>Login</h4>
                <form onSubmit={handleSubmit(handleLogin)}>

                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text"
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
                                    value: 6,
                                    message: 'Password should be at least 6 character length'
                                }
                            })}
                            placeholder="password"
                            className="input input-bordered w-full" />

                        <label className="label">
                            {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                        </label>
                    </div>
                    <input className='btn btn-accent w-full mb-3' type="submit" value="Login" />
                    <p className='text-red-500'><small>{signInError}</small></p>
                    <label className="label">
                        <p><small>Forget Password?</small> <Link className='text-secondary' >Reset Your password</Link></p>
                    </label>
                    <p><small>New to doctors portal?</small> <Link className='text-secondary' to="/signup">Create a new Account</Link></p>
                </form>
                <div className='divider'>OR</div>
                <button onClick={() => signInWithGoogle()} className='btn btn-outline w-full uppercase text-white'>Continue with google</button>
            </div>
        </div>
    );
};

export default Login;