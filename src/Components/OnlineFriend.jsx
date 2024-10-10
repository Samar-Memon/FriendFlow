import React from 'react'

const OnlineFriend = () => {
  return (
    <li className='flex items-center gap-3 font-bold text-gray-600 cursor-pointer hover:bg-gray-100 py-3 px-2 rounded-md'>
        <div className="relative w-8 h-8 rounded-full">
            <img src="https://avatars.githubusercontent.com/u/26040872?v=4" className="w-full h-full rounded-full object-cover object-center" />
            <div className="w-2 h-2 rounded-full bg-green-500 absolute top-0 right-0"></div>
        </div>
        <span>Samar Raza</span>
    </li>
  )
}

export default OnlineFriend