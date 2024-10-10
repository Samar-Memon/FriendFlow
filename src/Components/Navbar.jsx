import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaAngleDown } from "react-icons/fa";

const Navbar = ({ children }) => {
    return (
        <>
            <div className="font-bold bg-white w-full h-[8vh] sticky top-0 left-0 z-20 flex items-center justify-between px-3 text-[#0068fe]" style={{
                boxShadow: '1px 1px 5px #aaa'
            }}>
                <Link to={'/'} className='text-3xl'>FriendFlow</Link>

                <div className='flex items-center gap-2 hover:bg-gray-100 px-2 py-1 rounded-md cursor-pointer'>
                <div className="w-10 h-10 rounded-full">
                    <img src="https://avatars.githubusercontent.com/u/26040872?v=4" className="w-full h-full rounded-full object-cover object-center" />
                </div>
                    <span className='flex items-center gap-1'>Samar Raza <FaAngleDown className='hover:mt-1' /></span>
                </div>

            </div>
            {children}
        </>
    )
}

export default Navbar