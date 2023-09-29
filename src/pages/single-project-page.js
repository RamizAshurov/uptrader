import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useSelector, shallowEqual} from "react-redux"

import Column from "../components/column"
import SearchPanel from "../components/search-panel"

import { taskStatus } from "../store/tasksSlice/consts"

const SingleProjectPage = () => {
    const [searchNameValue, setSearchNameValue] = useState("")
    const [searchNumberValue, setSearchNumberValue] = useState("")
    const { projectId } = useParams()
    const navigate = useNavigate()
    const projectName = useSelector(state => {
        const project = state.projects.find(project => project.id === projectId)
        return project.name
    })
    const tasks = useSelector(state => state.tasks.filter(task => task.projectId === projectId), shallowEqual) // переделать

    const filterTasks = (tasks, name, number, status) => {
        const searchByName = (tasks) => {
            if (!name)
                return tasks
            return tasks.filter(task => task.name.toLowerCase().includes(name.toLowerCase()))
        }

        const searchByNumber = (tasks) => {
            if (!number)
                return tasks
            return tasks.filter(task => String(task.number).startsWith(number))
        }
    
        const filterByStatus = tasks => tasks.filter(task => task.status === status)

        const searchedTasksByName = searchByName(tasks);
        const searchedTasksByNameAndNumber = searchByNumber(searchedTasksByName);
        const searchedAndFilteredTasks = filterByStatus(searchedTasksByNameAndNumber)

        return searchedAndFilteredTasks
    }

    const handleSearchNameChange = e => setSearchNameValue(e.target.value)
    const handleSearchNumberChange = e => setSearchNumberValue(e.target.value)

    return (
        <div className="project-page">
            <div className="project-page__header">
                <button type="button" className="back-button" onClick={() => navigate(-1)}>
                    <svg 
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        height="24px"
                        id="Layer_1"
                        style={{ enableBackground: "new 0 0 512 512" }}
                        version="1.1"
                        viewBox="0 0 512 512"
                        width="24px"
                        xmlSpace="preserve"
                    >
                        <polygon fill="currentColor" points="352,128.4 319.7,96 160,256 160,256 160,256 319.7,416 352,383.6 224.7,256 "/>
                    </svg>
                </button>
                <h1>{projectName}</h1>
            </div>
            <SearchPanel 
                searchNameValue={searchNameValue}
                handleSearchNameChange={handleSearchNameChange}
                searchNumberValue={searchNumberValue}
                handleSearchNumberChange={handleSearchNumberChange}
            />
            <div className="project-page__columns">
                {Object.values(taskStatus).map(status => (
                    <Column
                        key={status}
                        projecId={projectId}
                        title={status}
                        tasks={filterTasks(tasks, searchNameValue, searchNumberValue, status)}
                    />
                ))}
            </div>
        </div>
    )
}

export default SingleProjectPage