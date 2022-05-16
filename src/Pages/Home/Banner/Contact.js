import React from 'react';
import appointment from '../../../assets/images/appointment.png';

const Contact = () => {
    return (
        <div className="hero min-h-screen" style={{
            background: `url(${appointment})`
        }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md flex flex-col space-y-4">
                    <h3 className="mb-5 text-2xl text-primary font-bold">Contact Us</h3>
                    <h2 className='text-4xl'>Stay Connected With Us</h2>

                    <div className='flex flex-col space-y-4'>
                        <input type="text" placeholder="Email Address" className="input input-bordered " />

                        <input type="text" placeholder="Subject" className="input input-bordered" />

                        <textarea className="textarea" placeholder="Your message"></textarea>
                    </div>
                    <div>
                        <button className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary w-24">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;