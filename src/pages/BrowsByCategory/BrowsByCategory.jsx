import React from 'react';
import { MdTour } from "react-icons/md";

const BrowsByCategory = () => {
    return (
        <div >
            <div className='flex items-center justify-center'>
                <div>
                    <h1>Brows By Category</h1>
                    <p className='font-bold text-xl  '>Pick a tour type</p>
                </div>
            </div>
            <div>
                <div>
                    <MdTour></MdTour>
                </div>
            </div>

        </div>
    );
};

export default BrowsByCategory;