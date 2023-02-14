import React from 'react';

const Review = ({ review1 }) => {
    const { name, people, reviews, address } = review1;

    return (
        <div className='bg-white p-5 rounded-md'>

            <div>
                <p className='text-black'>{reviews}</p>
            </div>
            <figure className='flex mt-10 justify-center items-center'>
                <div className="avatar">
                    <div className="mr-1 w-16 h-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img className='' src={people} alt='' />
                    </div>
                </div>
                <div className='card-body'>
                    <h4 className='text-black font-bold	text-xl mb-0'>{name}</h4>
                    <p className='text-black mt-0'>{address}</p>
                </div>
            </figure>
        </div>
    );
};

export default Review;