import React from 'react'
import { FaHome,FaRegUserCircle } from "react-icons/fa";
import { MdOndemandVideo } from "react-icons/md";
import { FaRegImage } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import OnlineFriend from './OnlineFriend';

const SideBar = () => {
  return (
    <div className='border-r-4 border-gray-100 h-[100vh] xl:w-[20%] lg:w-[25%] md:w-[30%] md:static absolute top-[8vh] -left-[1000%] w-[250px] p-2'>
        <div className='text-xl p-2'>
            <Link to={'/'} className='my-2 hover:bg-[#6c96d113] py-5 px-3 flex items-center gap-3 rounded-md font-semibold text-gray-600'><FaHome className='text-2xl' /> <span>Home</span></Link>
            <Link to={'/'} className='my-2 hover:bg-[#6c96d113] py-5 px-3 flex items-center gap-3 rounded-md font-semibold text-gray-600'><MdOndemandVideo className='text-2xl' /> <span>Videos</span></Link>
            <Link to={'/'} className='my-2 hover:bg-[#6c96d113] py-5 px-3 flex items-center gap-3 rounded-md font-semibold text-gray-600'><FaRegImage className='text-2xl' /> <span>Photos</span></Link>
            <Link to={'/'} className='my-2 hover:bg-[#6c96d113] py-5 px-3 flex items-center gap-3 rounded-md font-semibold text-gray-600'><FaRegUserCircle className='text-2xl' /> <span>Profile</span></Link>
        </div>
        <h1 className='text-2xl font-bold text-[#0068fe] mx-1'>Online Friends</h1> <hr className='my-2' />
        <ul>
            <OnlineFriend/>
            <OnlineFriend/>
            <OnlineFriend/>
            <OnlineFriend/>
        </ul>
    </div>
  )
}

export default SideBar