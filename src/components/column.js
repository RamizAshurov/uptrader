import { Link } from "react-router-dom"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { useDrop } from "react-dnd"
import TaskCard from "./task-card"
import Popup from "./popup"

import { taskStatus } from "../store/tasksSlice/consts"
import tasksActions from "../store/tasksSlice/actions"

const buttonStyles = {
    backgroundColor: "#242731",
    border: "none",
    color: "#9B9B9B",
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 7,
    right: 10,
    width: 24,
    height: 24
}


const Column = ({ projectId, title, tasks }) => {
    const [openModal, setOpenModal] = useState(false)
    const dispatch = useDispatch()
    
    const handleDrop = ({ id }) => {
        dispatch({
            type: tasksActions.changeStatus, 
            payload: { 
                id, 
                status: title.toLowerCase()
            }
        })  
    } 

    const [{ isOver }, drop] = useDrop(() => ({
        accept: "task-card",
        drop: handleDrop,
        collect: monitor => ({
            isOver: !!monitor.isOver()
        })
    }))

    return (
        <>
            <div className="column">
                <div className="column__header">
                    <h4 className="column__title">{title}</h4>
                    { title === taskStatus.queue && <button style={buttonStyles} onClick={() => setOpenModal(true)}>+</button>}
                </div>
                <div ref={drop} className="column__tasks">
                    {tasks.map(task => (
                        <Link to={`./tasks/${task.id}`} key={task.name}>
                            <TaskCard number={task.number} id={task.id} name={task.name}/>
                        </Link>
                    ))}
                </div>
            </div>
            { openModal && <Popup closeModal={() => setOpenModal(false)} /> }
        </>
    )
}

export default Column