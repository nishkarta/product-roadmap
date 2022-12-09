import React from 'react'
import Kanban from '../components/kanban'

const Homepage = () => {
    return (
        <div className='py-[20px] px-[50px] w-[80%] text-center md:w-[95%] md:text-left text-[#2F3136] leading-[20px]'>
            <h1 className='font-medium text-[20px] mb-[24px]'>Product Roadmap</h1>
            <Kanban />
        </div>
    )
}

export default Homepage