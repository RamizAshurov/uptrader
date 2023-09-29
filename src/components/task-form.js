import { useState } from "react"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";

import tasksActions from "../store/tasksSlice/actions";


const TaskForm = ({ closeModal, curTask = null }) => {
    const { projectId } = useParams()
    const dispatch = useDispatch()
    
    let type = curTask === null ? "add" : "edit"

    const priorities = [
        { value: "low", label: "Low" },
        { value: "medium", label: "Medium" },
        { value: "high", label: "High" }
    ]

    const timeUnits = [
        { value: "h", label: "hours" },
        { value: "d", label: "days" },
    ]

    const initialState = {
        number: curTask ? curTask.number : "",
        name: curTask ? curTask.name : "",
        description: curTask ? curTask.description : "",
        priority: curTask ? priorities.find(item => item.value === curTask.priority) : priorities[0],
        time: curTask ? curTask.timeToDone.value : "",
        unit: curTask ? timeUnits.find(item => item.value === curTask.timeToDone.unit): timeUnits[0]
    }

    const [number, setNumber] = useState(initialState.number)
    const [name, setName] = useState(initialState.name)
    const [time, setTime] = useState(initialState.time)
    const [description, setDescription] = useState(initialState.description)
    const [priority, togglePriority] = useState(initialState.priority)
    const [timeUnit, toggleTimeUnit] = useState(initialState.unit)

    const handleSubmit = e => {
        e.preventDefault();
        const formData = {
            id: curTask !== null && curTask.id,
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
            type: type === "add" ? tasksActions.addTask : tasksActions.editTask,
            payload: formData
        })
    
        e.target.reset();
        closeModal()
    }

    return (
        <form className="modal__form form" action="#" method="POST" onSubmit={handleSubmit}>
            <div className="form__input-wrapper">
                <label htmlFor="number">Task number</label>
                <input type="number" name="number" placeholder="Type a number..." value={number} onChange={e => setNumber(e.target.value)}/>
            </div>
            <div className="form__input-wrapper">
                <label htmlFor="name">Task name</label>
                <input type="text" name="name" placeholder="Type a name..." value={name} onChange={e =>setName(e.target.value)} />
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
                    <input 
                        type="number" 
                        name="time" 
                        placeholder="Type a time..." 
                        style={{ flexGrow: 1 }}
                        value={time}
                        onChange={e => setTime(e.target.value)}
                    />
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
                <textarea 
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    type="number" 
                    name="description" 
                    placeholder="Type a description..." 
                    rows="6"
                />
            </div>
            <button type="submit" className="form__submit">
                {type === "add" ? "Create a task" : "Edit task"}
            </button>
        </form>
    )
}

export default TaskForm