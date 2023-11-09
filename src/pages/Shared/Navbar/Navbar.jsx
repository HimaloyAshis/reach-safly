import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [open, setOpen] = useState(false)


    return (
        <nav className='bg-[#F1EAFF] shadow-purple-600'>
            <div onClick={() => setOpen(!open)} className='md:hidden'>
                <span>
                    {
                        open === false ? <Bars3Icon className="h-8 w-8 hover:bg-purple-700 p-1 rounded-md text-blue-500 cursor-pointer" />
                            :
                            <XMarkIcon className="h-8 w-8 hover:bg-purple-700 p-1 rounded-md text-blue-500 cursor-pointer" />
                    }
                </span>
            </div>
            <ul className={` gap- items-center z-10 py-4 absolute md:static duration-500 md:flex shadow-purple-200 ${open ? "top-4" : "-top-96"}`}>
                <div className='md:flex justify-center items-center'>
                    <Link><img className='h-12 w-12' src="https://i.ibb.co/XFKjMfT/New-Logo.png" alt="" /></Link>
                    <li className='hover:bg-purple-700 rounded-md text-xl p-1'> <Link >Romi Finance</Link></li>
                </div>

                <ul className='gap-3 md:flex '>
                    <li className='hover:bg-purple-700 rounded-md button '> <Link >Home</Link></li>
                    <li className='hover:bg-purple-700 rounded-md button '> <Link >Dashboard</Link></li>
                    <li className='hover:bg-purple-700 rounded-md button '> <Link >NFT</Link></li>
                    <li className='hover:bg-purple-700 rounded-md button '> <Link >Buy</Link></li>
                    <li className='hover:bg-purple-700 rounded-md button '> <Link >Referrals</Link></li>
                    <li className='hover:bg-purple-700 rounded-md button '> <Link >Earn</Link></li>
                    <li className='hover:bg-purple-700 rounded-md button '> <Link >About</Link></li>

                </ul>
                <ul className='gap-4 md:flex sm:hidden'>
                   <li> <Link>Login</Link></li>
                    <li><Link>Log Out</Link></li>
                </ul>
            </ul>

        </nav>
    );
};

export default Navbar;