import React from 'react';
import chair from '../../../assets/images/chair.png'
import background from '../../../assets/images/bg.png'

const Banner = () => {
    return (
        <div style={{
            background: `url(${background})`
        }} className="hero mb-20">
            <div className="hero-content flex-col px-5 lg:flex-row-reverse ">
                <img src={chair} className="flex-1 lg:w-1/2 rounded-lg shadow-2xl" alt='' />
                <div className='flex-1'>
                    <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;