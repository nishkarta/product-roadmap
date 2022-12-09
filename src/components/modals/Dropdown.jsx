import React from 'react'
import menu from '../../assets/images/Vector.png'
import EditModal from './EditModal'


const Dropdown = ({ id, dropDown, sectionTitle, showDel, setShowDel, task, showEdit, setShowEdit }) => {
    return (
        <div>
            <button data-id={id} className='bg-[#F2F2F2] rounded-[7px] py-[10.66px] px-[4.12px]'><img src={menu} alt="actions" /></button>
            {id === dropDown && (
                <ul className='actions absolute text-[14px]  bg-white border-[1px] border-[#E4E4E8] w-[138px] rounded-[4px] text-start'>
                    {(sectionTitle === "Group Task 2" || sectionTitle === "Group Task 3" || sectionTitle === "Group Task 4") && (
                        <li className='action m-0 px-[18px] py-[7.5px] bg-white hover:bg-[#F5F0FC] hover:text-[#5E20B3]'>
                            <button className=''><i className="fa-solid fa-arrow-left mr-[8px]"></i> Move Left</button>   </li>
                    )}
                    {sectionTitle !== "Group Task 4" && (
                        <li className='action m-0 px-[18px] py-[7.5px] bg-white hover:bg-[#F5F0FC] hover:text-[#5E20B3]'>
                            <button><i className="fa-solid fa-arrow-right mr-[8px]"></i> Move Right</button>                                                          </li>
                    )}

                    <li className='action m-0 px-[18px] py-[7.5px] bg-white hover:bg-[#F5F0FC] hover:text-[#5E20B3]'>
                        <button onClick={() => setShowEdit(true)}><i className="fa-solid fa-pen-to-square mr-[8px]"></i> Edit</button>
                    </li>
                    <li className='action m-0 px-[18px] py-[7.5px] bg-white hover:bg-[#F5F0FC] hover:text-[#5E20B3]'>
                        <button onClick={() => setShowDel(true)}><i className="fa-solid fa-trash mr-[8px]"></i> Delete</button>

                    </li>


                </ul>
            )}

            {showEdit && <EditModal task={task} showEdit={showEdit} setShowEdit={setShowEdit} />}

        </div>
    )
}

export default Dropdown