import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between bg-blue-300 px-4 '>
        <div className="logo font-bold">
            Logo
        </div>
      <ul className='flex gap-4'>
        <a href="">Home</a>
        <a href="">Contact</a>
        <a href="">About</a>
      </ul>
    </nav>
  )
}

export default Navbar
