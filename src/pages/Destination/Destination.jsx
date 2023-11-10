import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Destination = () => {
    return (
        <div className='mt-16 '>
            <p className='font-bold text-2xl'>Destination</p>
            <p className='font-bold text-2xl pb-6'>Top Destinations</p>
            <Carousel>
                <div>
                    <img src="https://images.pexels.com/photos/18969427/pexels-photo-18969427/free-photo-of-forth-bridge-in-scotland.jpeg?auto=compress&cs=tinysrgb&w=600" />

                </div>
                <div>
                    <img src="assets/2.jpeg" />

                </div>
                <div>
                    <img src="assets/3.jpeg" />

                </div>
            </Carousel>
        </div>
    );
};

export default Destination;