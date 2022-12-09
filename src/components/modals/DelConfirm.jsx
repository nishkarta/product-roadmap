import React from 'react'
import warning from '../../assets/images/ExclamationCircle.png'

const DeleteConfirm = ({ showDel, setShowDel }) => {
    return (
        <>

            <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
                <div className='relative mx-auto px-[32px] pt-[32px] pb-[24px] w-[430px] h-[188px]'>
                    <div className="border-[1px] py-[28px] px-[33px] shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        <div className="relative flex-auto flex w-full ">
                            <div className='mr-[17.5px]'>
                                <img className="w-[37px] h-[21px] object-cover" src={warning} alt="delconfirm" />
                            </div>
                            <div>
                                <div className='mb-[8px] font-bold text-[16px]'>
                                    <h1>
                                        Delete Task
                                    </h1>
                                </div>
                                <div className="mb-[29px] text-[14px]">
                                    <p>Are you sure want to delete this task?
                                        your action can’t be reverted.</p>
                                </div>
                                <div className="flex items-center justify-end ">
                                    <button className='py-[5px] px-[16px] border border-[#D9D9D9] rounded-[2px] text-[14px] mr-[8px]'
                                        type="button"
                                        onClick={() => setShowDel(false)}
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        className='bg-[#EB5757] py-[5px] px-[16px] rounded-[2px] text-[14px] text-white'
                                        type="button" onClick={() => setShowDel(false)}

                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>


                        </div>

                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    )
}

export default DeleteConfirm