import React from 'react';
import clock from '../../../assets/icons/clock.svg'
import marker from '../../../assets/icons/marker.svg'
import location from '../../../assets/icons/phone.svg'

const Info = () => {
    return (
        <div className='grid grid-cols1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-5 mb-10'>
            <div className="card card-side bg-gradient-to-r from-primary to-secondary shadow-xl max-w-[450px]">
                <figure><img src={clock} className="m-6 w-20" alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-white font-bold">Opening Hours</h2>
                    <p className='text-white'>Click the button to watch on Jetflix app.</p>
                </div>
            </div>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img className="m-6 w-20" src={marker} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-white font-bold">Visit Our Location</h2>
                    <p className='text-white'>Click the button to watch on Jetflix app.</p>
                </div>
            </div>
            <div className="card card-side bg-gradient-to-r from-primary to-secondary shadow-xl">
                <figure><img className="m-6 w-20" src={location} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-white font-bold">Contact us</h2>
                    <p className='text-white'>Click the button to watch on Jetflix app.</p>
                </div>
            </div>
        </div>
    );
};

export default Info;