import React from 'react'
import { MdOndemandVideo } from "react-icons/md";
import { FaRegImage } from "react-icons/fa6";

const Upload = () => {
  return (
    <div className='py-7 px-3 md:w-[80%] w-[98%] mx-auto my-3 rounded-md bg-white' style={{
        boxShadow: '1px 1px 10px #f1f1f1'
    }}>
        <div className="flex items-center gap-3">
            <img src="https://avatars.githubusercontent.com/u/26040872?v=4" className="w-7 h-7 rounded-full object-cover object-center" />
            <input type="text" className='border-none w-full h-[40px] outline-none' placeholder="What's is your mind Samar Raza?" />
        </div>
            <hr className='m-2' />
            <div className='mt-5 flex flex-wrap gap-y-3 items-center justify-between'>
                <button className=' w-[49%] flex justify-center items-center bg-gray-50 h-[50px] rounded-md hover:bg-gray-100 gap-3 font-semibold text-lg'><MdOndemandVideo className='text-blue-500 text-xl' /> Upload Video</button>
                <button className=' w-[49%] flex justify-center items-center bg-gray-50 h-[50px] rounded-md hover:bg-gray-100 gap-3 font-semibold text-lg'><FaRegImage className='text-orange-500 text-xl' /> Upload Photo</button>
                <button className='w-full bg-green-500 text-lg font-semibold text-white h-[50px] rounded-md hover:bg-green-600'>Post</button>
            </div>
    </div>
  )
}

export default Upload