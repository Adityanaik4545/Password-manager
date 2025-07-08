import React from 'react'

const Navbar = () => {
  return (
    <nav className=' bg-slate-800 text-white  '>
      <div className='flex justify-between px-4 items-center py-2 mycontainer'>
        <div className="logo font-bold text-2xl">
          <span className='text-green-500'>&lt;</span>
            Pass
            <span className='text-green-500'>OP/&gt;</span>
        </div>
      <a href="https://github.com/Adityanaik4545" target='_blank'>
    <button className='bg-green-700 hover:bg-green-600 text-white flex justify-between items-center rounded-full gap-1 px-1  ring-1'>
        <img src="public/icons/github.png" className='invert w-10 p-1' alt="" /> <span className='font-bold '>Github</span>
    </button>
    </a>
      </div>
    </nav>
  )
}

export default Navbar
