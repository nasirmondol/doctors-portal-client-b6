import React from 'react';
import appointment from '../../../assets/images/appointment.png'
import PrimaryButton from '../../Shared/PrimaryButton/PrimaryButton';

const Contact = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }} className='mt-20 p-8'>
            <div className='text-center'>
                <p className='text-primary text-xl mt-10'>Contact us</p>
                <h1 className='font-normal text-3xl text-white mb-10'>Stay connected with us</h1>
            </div>
            <form className='grid grid-cols-1 justify-items-center gap-5'>
                <input
                    type='text'
                    placeholder='Email Address'
                    className='input w-full max-w-md'
                />
                <input
                    type='text'
                    placeholder='Subject'
                    className='input w-full max-w-md'
                />
                <textarea
                    className='textarea w-full max-w-md'
                    placeholder='Your message'
                    rows={6}
                ></textarea>
                <PrimaryButton>Submit</PrimaryButton>
            </form>
        </section>
    );
};

export default Contact;