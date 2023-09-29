import { useState } from "react"
import { useDrag } from "react-dnd"

const TaskCard = ({ number, id, name }) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: "task-card",
        item: { id },
        colletct: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    }))

    return (
        <div ref={drag} className="task-card card">
            <div className="task-card__number">Задача № {number}</div>
            <p className="task-card__title">{name}</p>
        </div>
    )
}

export default TaskCard