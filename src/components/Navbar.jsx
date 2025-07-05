import React from 'react'

const Navbar = () => {
  return (
    <nav className=' bg-slate-600 text-white  '>
      <div className='flex justify-between px-4 items-center py-5 mycontainer'>
        <div className="logo font-bold text-2xl">
          <span className='text-green-500'>&lt;</span>
            Pass
            <span className='text-green-500'>OP/&gt;</span>
        </div>
      <ul className='flex gap-4'>
        <a href="">Home</a>
        <a href="">Contact</a>
        <a href="">About</a>
      </ul>
      </div>
    </nav>
  )
}

export default Navbar
