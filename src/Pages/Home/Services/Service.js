import React from 'react';

const Service = ({ service }) => {
    const { name, icon, description } = service;
    return (
        <div className="card bg-white shadow-xl mb-10">
            <figure className="px-10 pt-10">
                <img src={icon} alt="" className="rounded-xl w-28 h-24" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-black">{name}</h2>
                <p className='text-black'>{description}</p>
            </div>
        </div>
    );
};

export default Service;