import React from 'react'
import FriendRequest from './FriendRequest'

const RightBar = () => {
  return (
    <div className='xl:w-[20%] xl:static absolute top-[8vh] -right-[100%] w-[250px]'>
      <div className="w-full h-[200px] p-2">
      <img src="https://images.pexels.com/photos/708440/pexels-photo-708440.jpeg?auto=compress&cs=tinysrgb&w=600" className="w-full h-full object-cover rounded-md object-center" />
      </div>
      <h1 className='text-2xl font-bold text-[#0068fe] my-2 mx-1'>Friend Requests</h1> <hr className='my-2' />
      <ul className='mt-4'>
        <FriendRequest/>
        <FriendRequest/>
      </ul>
    </div>
  )
}

export default RightBar