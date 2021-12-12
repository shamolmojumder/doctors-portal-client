import React from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#root');
const AppointmentForm = ({modalIsOpen,closeModal,appointmentOn,date}) => {
    const { register, handleSubmit,formState: { errors } } = useForm();
    const onSubmit = data =>{
        console.log(data);
        closeModal();
    }
    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h2 className="text-brand text-center">{appointmentOn}</h2>
                <p className='text-center text-secondary'> <small> Appiontment on {date.toDateString()} </small> </p>
            <form className='p-5' onSubmit={handleSubmit(onSubmit)}>
                <input {...register('firstName',{ required: true })} placeholder='first name'/> {/* register an input */}
                {errors.firstName && <p className='text-danger'>First name is required.</p>}
                <input {...register('lastName', { required: true })} placeholder="last name"/>
                {errors.lastName && <p className='text-danger'>Last name is required.</p>}
                <select {...register("category")}>
                    <option value="">Select...</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
                {errors.category && <p className='text-danger'>Gender is required.</p>}
                <input {...register('age', { pattern: /\d+/ })} placeholder='age' />
                {errors.age && <p className='text-danger'>Please enter number for age.</p>}
                <input className='btn-brand btn ' type="submit" />
               
            </form>
            </Modal>
        </div>
    );
};

export default AppointmentForm;