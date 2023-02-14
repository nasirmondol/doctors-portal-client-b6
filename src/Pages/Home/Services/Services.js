import React from 'react';
import teeth from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import Whitening from '../../../assets/images/whitening.png'
import Service from './Service';

const Services = () => {

    const services = [
        {
            _id: 0,
            name: 'Fluride',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, ipsum.',
            icon: teeth
        },
        {
            _id: 1,
            name: 'Cavity Feeling',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, ipsum.',
            icon: cavity
        },
        {
            _id: 2,
            name: 'Teeth Whitening',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, ipsum.',
            icon: Whitening
        },

    ]
    return (
        <>
            <div className='text-center'>
                <h4 className='text-primary font-bold mt-20'>Our services</h4>
                <h3 className='text-success font-bold text-3xl mb-10'>Service we provide</h3>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 px-5 bg-base-100 mb-10'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </>
    );
};

export default Services;
