import React from 'react'
import logo from '../logo.png'
const Header = () => {
  return (
   <div className="bg-gray-800 flex items-center p-4 space-x-4 rounded-md ">
   <img src={logo} alt="logo" className="w-36 h-24"/>
    <h2 className="text-white text-5xl">MoviesDB Search</h2>
   </div>
  )
}

export default Header