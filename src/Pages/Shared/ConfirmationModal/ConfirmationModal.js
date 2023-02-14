import React from 'react';

const ConfirmationModal = ({ title, message, deleteDoctorName, closeModal, successDoctor, modalData }) => {
    return (
        <div>
            <input type="checkbox" id="confirmation-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <h3 className="text-lg font-bold">{title}</h3>
                    <p className="py-4">{message}</p>
                    <div className="modal-action">
                        <label onClick={() => successDoctor(modalData)} htmlFor="my-modal" className="btn bg-red-400">{deleteDoctorName}</label>
                        <button onClick={closeModal} className='btn btn-outline'>Cancel</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ConfirmationModal;