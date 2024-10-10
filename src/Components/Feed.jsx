import React from 'react'
import Upload from './Upload'
import Post from './Post'

const Feed = () => {
  return (
    <div className="xl:w-[60%] md:w-[70%] w-full min-h-[100vh]">
        <Upload/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
    </div>
  )
}

export default Feed