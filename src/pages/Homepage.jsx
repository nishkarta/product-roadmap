import React from 'react'
import Kanban from '../components/kanban'

const Homepage = () => {
    return (
        <div className='py-[20px] px-[50px]'>
            <h1 className='font-medium text-[20px] mb-[24px]'>Product Roadmap</h1>
            <Kanban />
        </div>
    )
}

export default Homepage