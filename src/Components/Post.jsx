import React from 'react'
import { LuMoreVertical } from "react-icons/lu";
import { AiOutlineLike } from "react-icons/ai";
import { BiSolidCommentDetail } from "react-icons/bi";
import { FaShareNodes } from "react-icons/fa6";

const Post = () => {
  return (
    <div className='rounded-md my-10 md:w-[90%] w-full ml-3 px-3 py-2' style={{boxShadow: '1px 1px 10px #ddd'}}>
        <div className="flex items-center justify-between">
            <div className='flex items-center gap-2'>
            <img src="https://avatars.githubusercontent.com/u/26040872?v=4" className="w-8 h-8 rounded-full" />
            <span className='font-semibold text-lg'>Samar Raza</span>
            <strong className='text-[12px] text-gray-600'>(1 Day Ago)</strong>
            </div>
            <LuMoreVertical className='text-2xl cursor-pointer' />
        </div>
        <span className='text-md mt-2 mx-2 inline-block'>This is Post Title:)</span>
        <hr className='m-3' />
        <img src="https://avatars.githubusercontent.com/u/26040872?v=4" className="w-full mx-auto object-contain max-h-[500px]" />
        <div className='mt-5 flex items-center justify-between'>
                <button className=' w-[32%] flex justify-center items-center bg-gray-50 h-[50px] rounded-md hover:bg-gray-100 gap-3 font-semibold text-lg'><AiOutlineLike  className='text-blue-500 text-xl' /> Like</button>
                <button className=' w-[32%] flex justify-center items-center bg-gray-50 h-[50px] rounded-md hover:bg-gray-100 gap-3 font-semibold text-lg'><BiSolidCommentDetail  className='text-orange-500 text-xl' /> Comment</button>
                <button className=' w-[32%] flex justify-center items-center bg-gray-50 h-[50px] rounded-md hover:bg-gray-100 gap-3 font-semibold text-lg'><FaShareNodes   className='text-gray-600 text-xl' /> Share</button>
            </div>
    </div>
  )
}

export default Post