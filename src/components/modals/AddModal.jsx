import React from 'react'

const AddModal = ({ showAdd, setShowAdd }) => {
    return (
        <>

            <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
                <div className='relative my-6 mx-auto p-[30px] w-[567px] h-[302.5px]'>
                    <div className="border-[1px] py-[28px] px-[33px] shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        <div className="relative flex-auto">
                            <div className='mb-[21px] font-bold text-[16px]'>
                                <h1>
                                    Create Task
                                </h1>
                            </div>
                            <div className='w-full'>
                                <form className='' onSubmit={() => setShowAdd(false)}>
                                    <div className='mb-[8px]'>
                                        <label className='block text-[12px] text-[#5D6372] mb-[4px]' for="name">
                                            Task Name
                                        </label>
                                        <input className=" border border-[#E5E5E5] placeholder-[#E5E5E5] rounded w-full h-[39px] p-[10px] text-[14px] text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="example: Build rocket to Mars." required />

                                    </div>
                                    <div className='mb-[43.5px]'>
                                        <label className='block text-[12px] text-[#5D6372] mb-[4px]' for="progress_percentage">
                                            Progress (%)
                                        </label>
                                        <input className=" border border-[#E5E5E5] placeholder-[#E5E5E5] rounded w-[99px] h-[39px] p-[10px] text-[14px] text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="progress_percentage" type="number" min="0" max="100" placeholder="0%" required />

                                    </div>
                                    <div className="flex items-center justify-end ">
                                        <button className='py-[5px] px-[16px] border border-[#D9D9D9] rounded-[2px] text-[14px] mr-[8px]'
                                            type="button"
                                            onClick={() => setShowAdd(false)}
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            className='bg-[#27AE60] py-[5px] px-[16px] rounded-[2px] text-[14px] text-white'
                                            type="submit"

                                        >
                                            Save Task
                                        </button>
                                    </div>

                                </form>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    )
}

export default AddModal