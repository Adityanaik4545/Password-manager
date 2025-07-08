import React from 'react'

const Footer = () => {
    return (
        <footer className='w-full bg-slate-900 text-white fixed bottom-0 text-center'>
            <div className="logo font-bold text-2xl">
                <span className='text-green-500'>&lt;</span>
                Pass
                <span className='text-green-500'>OP/&gt;</span>
            </div>
            <footer className='flex justify-center items-center gap-15 text-gray-400 text-xs md:text-sm'>
                <p>Made by Aditya</p>
                <p>© 2025 PassOP. All rights reserved.</p>
            </footer>
        </footer>
    )
}

export default Footer
