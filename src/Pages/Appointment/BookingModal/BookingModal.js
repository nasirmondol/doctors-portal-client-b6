import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-hot-toast';
import auth from '../../../Firebase/Firebase.init';

const BookingModal = ({ treatment, setTreatment, selectedDate, refetch }) => {
    // treatment means appointmentOption th at carries name, slots, _id
    const { name: treatmentName, slots, price } = treatment;
    const [user] = useAuthState(auth);
    const date = format(selectedDate, "PP")

    const handleBooking = event => {
        event.preventDefault()
        const form = event.target;
        const slot = form.slot.value;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;

        const booking = {
            appointmentDate: date,
            treatment: treatmentName,
            patient: name,
            slot,
            email,
            phone,
            price

        }

        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    setTreatment(null)
                    toast.success('Booking confirmed')
                    refetch()
                }
                else {
                    toast.error(data.message)
                }

            })

    }
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative p-5">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-xl font-bold text-secondary text-center ">{treatmentName}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-4 mt-6'>
                        <input type="text" disabled value={date} className="input input-bordered w-full" />
                        <select name='slot' className="select select-bordered w-full">
                            {
                                slots.map((slot, i) =>
                                    <option value={slot}
                                        key={i}
                                    >{slot}</option>)
                            }
                        </select>
                        <input name='name' type="text" defaultValue={user?.displayName} placeholder='your name' className="input input-bordered w-full" />
                        <input name='email' type="email" defaultValue={user?.email} placeholder="Email Address" className="input input-bordered w-full" />
                        <input name='phone' type="number" placeholder="Phone" className="input input-bordered w-full" />
                        <input type="submit" className='btn btn-accent w-full' value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;