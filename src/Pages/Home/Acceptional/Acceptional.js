import React from 'react';
import children from '../../../assets/images/treatment.png'

const Acceptional = () => {
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure><img className='lg:w-1/2' src={children} alt="Album" /></figure>
            <div className="card-body lg:w-1/2 justify-center items-center">
                <div className='justify-center items-center'>
                    <h2 className='card-title font-bold text-white text-5xl'>Exceptional Dental</h2>
                    <h2 className='card-title font-bold text-white text-5xl'>Care, on Your Terms</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit perspiciatis animi, voluptates error maxime assumenda id ea suscipit similique laboriosam, sit, quam voluptate fugiat? Dolore explicabo nulla eveniet obcaecati dolorum!</p>
                </div>
            </div>
        </div>
    );
};

export default Acceptional;