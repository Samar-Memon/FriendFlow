import React from 'react'
import Navbar from '../Components/Navbar'
import SideBar from '../Components/SideBar'
import Feed from '../Components/Feed'
import RightBar from '../Components/RightBar'

const Home = () => {
  return (
    <Navbar>
        <div className="flex">
        <SideBar/>
        <Feed/>
        <RightBar/>
        </div>
    </Navbar>
  )
}

export default Home