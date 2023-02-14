import React from 'react';
import quote from '../../../assets/icons/quote.svg';
import people1 from '../../../assets/images/people1.png'
import people2 from '../../../assets/images/people2.png'
import people3 from '../../../assets/images/people3.png'
import Review from '../Review/Review';

const Testimonial = () => {
    const reviews =[
        {
            _id: 1,
            name: 'Winson Herry',
            reviews: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            people: people1,
            address: "Jackson Height"
        },
        {
            _id: 2,
            name: 'Pablo Gavi',
            reviews: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            people: people2,
            address: "Hamstring Villa"
        },
        {
            _id: 3,
            name: 'Hadise Maisha',
            reviews: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            people: people3,
            address: "Washington Dc"
        },
    ]
    return (
        <section className='px-5 mt-20 '>
            <div className='flex justify-between'>
                <div>
                    <p className='text-primary font-bold text-xl'>Testimonial</p>
                    <h2 className='text-white font-normal text-4xl'>What Our Patients Says</h2>
                </div>
                <figure>
                    <img className='sm:w-24 lg:w-48' src={quote} alt="" />
                </figure>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-5 gap-8'>
                {
                    reviews.map(review => <Review
                    key={review._id}
                    review1={review}
                    ></Review>)
                }
            </div>
        </section>
    );
};

export default Testimonial;