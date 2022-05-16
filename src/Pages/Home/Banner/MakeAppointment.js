import React from 'react';
import doctor from '../../../assets/images/doctor.png';
import appointment from '../../../assets/images/appointment.png';

const MakeAppointment = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }} className='flex justify-center items-center'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-120px]' src={doctor} alt="" />
            </div>
            <div className='flex-1 text-white'>
                <h3 className='text-xl text-primary font-bold'>Appointment</h3>
                <h2 className='text-4xl'>Make an Appointment Today</h2>
                <p className='py-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, voluptates! Quibusdam dolore quisquam sapiente autem totam cumque possimus explicabo, libero provident? Voluptatibus perferendis eveniet soluta unde, sapiente quis doloribus vel magnam, reiciendis, libero sed. Facere sit harum sint fuga. Saepe! </p>
                <button className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary justify-start">Get Started</button>
            </div>
        </section>
    );
};

export default MakeAppointment;