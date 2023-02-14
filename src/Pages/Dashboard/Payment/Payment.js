import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom'
import CheckoutForm from './CheckoutForm ';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
console.log(stripePromise)


const Payment = () => {
    const bookings = useLoaderData();
    const { price, appointmentDate, slot, treatment } = bookings;
    return (
        <div>
            <h3 className="text-3xl">Payment {treatment}</h3>
            <p>Please pay <strong>${price}</strong> for Your appointment on {appointmentDate} at {slot}</p>
            <div className='w-96 my-12'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm  bookings={bookings} />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;