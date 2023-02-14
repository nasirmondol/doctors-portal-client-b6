import React from 'react';

const AppointmentOption = ({ option, setTreatment }) => {
    const { name, slots, price } = option;
    return (
        <div className="card shadow-xl p-5">
            <div className="card-body">
                <h2 className="text-secondary text-2xl font-bold text-center">{name}</h2>
                <p className='text-center'>{slots.length > 0 ? slots[0] : <span className="text-xl text-red-400 text-center">Try another day</span>}</p>
                <p className='text-center'>{slots.length} {slots.length > 0 ? 'spaces' : 'space'} Available</p>
                <p className='text-center'>Price: ${price}</p>
                <div className="card-actions justify-center">
                    <label
                        disabled={slots.length === 0}
                        onClick={() => setTreatment(option)}
                        htmlFor="booking-modal"
                        className=" btn btn-primary text-white"
                    >Book Appointment</label>
                </div>


            </div>
        </div>
    );
};

export default AppointmentOption;