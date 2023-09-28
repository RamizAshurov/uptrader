import { useState } from "react"
import { useParams } from "react-router-dom"
import { useDispatch } from "react-redux";
import Select from "react-select";

import tasksActions from "../store/tasksSlice/actions";


const TaskForm = ({ closeModal }) => {
    const { projectId } = useParams()
    const dispatch = useDispatch()
    
    const priorities = [
        { value: "low", label: "Low" },
        { value: "middle", label: "Middle" },
        { value: "high", label: "High" }
    ]

    const timeUnits = [
        { value: "h", label: "hours" },
        { value: "d", label: "days" },
    ]

    const [priority, togglePriority] = useState(priorities[0])
    const [timeUnit, toggleTimeUnit] = useState(timeUnits[0])

    const handleSubmit = e => {
        e.preventDefault();
        const formData = {
            projectId,
            name: e.target.elements["name"].value,
            number: e.target.elements["number"].value,
            priority: priority.value,
            timeToDone: {
                value: e.target.elements["time"].value,
                unit: timeUnit.value
            },
            description: e.target.elements["description"].value
        }
    
        dispatch({
            type: tasksActions.addTask,
            payload: formData
        })
    
        e.target.reset();
        closeModal()
    }

    return (
        <form className="modal__form form" action="#" method="POST" onSubmit={handleSubmit}>
            <div className="form__input-wrapper">
                <label htmlFor="number">Task number</label>
                <input type="number" name="number" placeholder="" />
            </div>
            <div className="form__input-wrapper">
                <label htmlFor="name">Task name</label>
                <input type="text" name="name" placeholder="" />
            </div>
            <div className="form__input-wrapper">
                <label htmlFor="priority">Priority</label>
                <Select
                    className="form__select"
                    classNamePrefix="select"
                    options={priorities}
                    isSearchable={false}
                    value={priority}
                    onChange={togglePriority}
                />
            </div>
            <div className="form__input-wrapper">
                <label htmlFor="time">Time to done</label>
                <div style={{ display: "flex", gap: 10 }}>
                    <input type="number" name="time" placeholder="" style={{ flexGrow: 1 }}/>
                    <Select
                        className="form__select"
                        classNamePrefix="select"
                        options={timeUnits}
                        isSearchable={false}
                        value={timeUnit}
                        onChange={toggleTimeUnit}
                    />
                </div>
            </div>
            <div className="form__input-wrapper">
                <label htmlFor="description">Description</label>
                <textarea type="number" name="description" placeholder="" rows="6"/>
            </div>
            <button type="submit" className="form__submit">Create a task</button>
        </form>
    )
}

export default TaskForm