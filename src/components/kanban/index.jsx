import React, { useState } from 'react'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import mockData from '../../mockData'
import Card from '../card'
import add from '../../assets/images/PlusCircle.png'
import completed from '../../assets/images/CheckCircle.png'
import Dropdown from '../modals/Dropdown'
import AddModal from '../modals/AddModal'
import DelConfirm from '../modals/DelConfirm'

const Kanban = (props) => {
    const [data, setData] = useState(mockData)
    const [dropDown, setDropdown] = React.useState(null);
    const [showAdd, setShowAdd] = React.useState(false);
    const [showEdit, setShowEdit] = React.useState(false);
    const [showDel, setShowDel] = React.useState(false);



    React.useEffect(() => {
        const handleDropdown = id => {
            if (dropDown === id || (dropDown && id === undefined)) {
                setDropdown(null);
            }
            if (dropDown !== id) {
                setDropdown(id);
            }
        };
        const handleClick = ({ target }) => {
            handleDropdown(target.dataset.id);
        };
        document.addEventListener("click", handleClick);
        return () => document.removeEventListener("click", handleClick)
    }, [dropDown]);



    const onDragEnd = result => {
        if (!result.destination) return
        const { source, destination } = result

        if (source.droppableId !== destination.droppableId) {
            const sourceColIndex = data.findIndex(e => e.id === source.droppableId)
            const destinationColIndex = data.findIndex(e => e.id === destination.droppableId)

            const sourceCol = data[sourceColIndex]
            const destinationCol = data[destinationColIndex]

            const sourceTask = [...sourceCol.tasks]
            const destinationTask = [...destinationCol.tasks]

            const [removed] = sourceTask.splice(source.index, 1)
            destinationTask.splice(destination.index, 0, removed)

            data[sourceColIndex].tasks = sourceTask
            data[destinationColIndex].tasks = destinationTask

            setData(data)
        }
    }


    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <div className='kanban flex flex-col justify-center items-center mx-auto md:flex-row md:justify-between md:items-start'>

                {
                    data.map(section => (
                        <Droppable key={section.id}
                            droppableId={section.id}
                        >
                            {(provided) => (
                                <div
                                    {...provided.droppableProps}
                                    className={`kanban__section border-[1px] p-[12px] rounded-[4px] w-[306px] md:mr-3 mb-5 
                                    ${section.title === "Group Task 1" && "border-[#EB2F96] bg-[#FFF9FB]"}
                                    ${section.title === "Group Task 2" && "border-[#7B61FF] bg-[#FCFAFD]"}
                                    ${section.title === "Group Task 3" && "border-[#2F54EB] bg-[#F7FAFF]"}
                                    ${section.title === "Group Task 4" && "border-[#52C41A] bg-[#F7FAFF]"}
                                    `}
                                    ref={provided.innerRef}>
                                    <button
                                        className={`kanban__section__title text-[12px] border-[1px] flex p-1 rounded-[2px] mb-[5px]
                                        ${section.title === "Group Task 1" && "border-[#FFADD2] text-[#EB2F96]"}
                                        ${section.title === "Group Task 2" && "border-[#D3ADF7] text-[#7B61FF]"}
                                        ${section.title === "Group Task 3" && "border-[#ADC6FF] text-[#2F54EB]"}
                                        ${section.title === "Group Task 4" && "border-[#B7EB8F] text-[#52C41A]"}
                                        `}>{section.title}</button>
                                    <div
                                        className='kanban__section__description font-medium text-[12px] text-[#2F3136] mb-[10px]'>
                                        {section.description}
                                    </div>
                                    <div
                                        className='kanban__section__content'>
                                        {section.tasks.length === 0 && <div className='bg-[#ffffff] border-[1px] p-[12px] border-[#E4E4E8] mb-[12px] rounded-[4px] text-[#B7BDC9] text-[14px]'>No Task Available</div>}


                                        {
                                            section.tasks.map((task, index) => (
                                                <Draggable
                                                    key={task.id}
                                                    draggableId={task.id}
                                                    index={index}
                                                >
                                                    {(provided, snapshot) => (
                                                        <div
                                                            ref={provided.innerRef}
                                                            {...provided.draggableProps}
                                                            {...provided.dragHandleProps}
                                                            style={{
                                                                ...provided.draggableProps.style,
                                                                opacity: snapshot.isDragging ? '0.5' : '1'
                                                            }}
                                                        >
                                                            <Card>

                                                                <div className='bg-[#ffffff] border-[1px] p-[12px] border-[#E4E4E8] mb-[12px] rounded-[4px]'>
                                                                    <div className='task__name mb-[30px] text-[14px] text-[#2F3136] font-medium'>
                                                                        {task.name}
                                                                    </div>
                                                                    <div className='task__progress flex items-center'>

                                                                        <div className="progress__bar w-[90px] h-[8px] bg-gray-200 rounded-full dark:bg-[#f5f5f5]  mr-[9px]">
                                                                            <div className={`h-[8px] rounded-full 
               ${task.progress_percentage === 100 ? "bg-[#52C41A]" : "bg-[#1890FF]"}                                                            `} style={{ width: task.progress_percentage + "%" }}></div>
                                                                        </div>
                                                                        <div className='progress__number flex justify-between w-[100%] items-center'>
                                                                            <div className='text-[12px] text-[#8c8c8c]'>
                                                                                {task.progress_percentage === 100 ? <img src={completed} alt="completed" /> : task.progress_percentage + "%"}

                                                                            </div>
                                                                            <div className='relative'>
                                                                                <Dropdown task={task} showEdit={showEdit} setShowEdit={setShowEdit} sectionTitle={section.title} dropDown={dropDown} id={task.id} showDel={showDel} setShowDel={setShowDel} />
                                                                            </div>
                                                                        </div>


                                                                    </div>
                                                                </div>



                                                            </Card>
                                                        </div>
                                                    )}
                                                </Draggable>
                                            ))
                                        }
                                        {provided.placeholder}
                                        <button className='flex text-[#2F3136] text-[14px]' onClick={() => setShowAdd(true)}><img src={add} alt="add" className='mr-[9.38px]' />New Task</button>
                                    </div>
                                </div>
                            )}
                        </Droppable>
                    ))
                }
            </div>
            {showAdd && <AddModal showAdd={showAdd} setShowAdd={setShowAdd} />}
            {showDel && <DelConfirm showDel={showDel} setShowDel={setShowDel} />}

        </DragDropContext>
    )
}

export default Kanban