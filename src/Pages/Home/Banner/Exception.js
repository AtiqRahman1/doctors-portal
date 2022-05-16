import React from 'react';
import treatment from '../../../assets/images/treatment.png';

const Exception = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <img src={treatment} className="max-w-sm rounded-lg shadow-2xl" alt="" />
                <div>
                    <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                    <p className="py-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum harum earum porro, aspernatur sunt, quae possimus error voluptates odio accusamus cum eligendi temporibus tempore atque consequuntur deleniti necessitatibus a ut dolorum, iusto perspiciatis dolorem. Dolores, minima quia ipsa modi quo eligendi, dolore, aliquam deleniti aut voluptate voluptatibus nesciunt expedita corporis?</p>
                    <button className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary justify-start">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Exception;