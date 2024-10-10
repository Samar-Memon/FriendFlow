import React from 'react'

const FriendRequest = () => {
  return (
    <li className='flex items-center justify-between font-bold text-gray-600 cursor-pointer hover:bg-gray-100 py-3 px-2 rounded-md'>
        <div className='flex items-center gap-3'>
        <div className="relative w-8 h-8 rounded-full">
            <img src="https://avatars.githubusercontent.com/u/26040872?v=4" className="w-full h-full rounded-full object-cover object-center" />
            <div className="w-2 h-2 rounded-full bg-green-500 absolute top-0 right-0"></div>
        </div>
        <span>Samar Raza</span>
        </div>
        <div className='flex items-center gap-2'>
            <button className='bg-green-500 text-white font-semibold text-md px-2 py-1 rounded-md hover:bg-green-600'>Accept</button>
            <button className='bg-red-500 text-white font-semibold text-md px-2 py-1 rounded-md hover:bg-red-600'>Reject</button>
        </div>
    </li>
  )
}

export default FriendRequest