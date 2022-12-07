import React from 'react'
import logo from '../../assets/images/logo.png'

const Navbar = () => {
    return (
        <div className='navbar bg-[#2F3136] w-[68px] h-[100vh] text-white'>
            <img src={logo} className="w-[46.44px] h-[33px] mx-auto mt-[20px]" alt="logo" />
        </div>
    )
}

export default Navbar