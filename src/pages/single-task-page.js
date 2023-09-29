import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useSelector, shallowEqual } from "react-redux" 

import Popup from "../components/popup"
import TaskForm from "../components/task-form"
import CommentsList from "../components/comments-list"

import moment from "moment"

const SingleTaskPage = () => {
    const [openModal, setOpenModal] = useState(false)
    const { taskId } = useParams()
    const navigate = useNavigate()
    const { id, number, name, description, status, priority, startDate, timeToDone} = useSelector(state => state.tasks.find(task => task.id === taskId))
    // const comments = useSelector(state => state.comments.filter(comment => comment.taskId === taskId), shallowEqual)

    const format = {
        in: timeToDone.unit === "h" ? "lll" : "ll",
        out: timeToDone.unit === "h" ? "MMM Do, h:mm" : "MMM Do"
    }

    return (
        <div className="task-page task">
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
            <div className="task-page__header task__header">
                <p className="task__number">
                    Task №{number}
                    <button type="button" className="task__edit-button" onClick={() => setOpenModal(true)}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 50 50"
                            width="20px"
                            height="20px"
                        >
                            <path d="M 43.125 2 C 41.878906 2 40.636719 2.488281 39.6875 3.4375 L 38.875 4.25 L 45.75 11.125 C 45.746094 11.128906 46.5625 10.3125 46.5625 10.3125 C 48.464844 8.410156 48.460938 5.335938 46.5625 3.4375 C 45.609375 2.488281 44.371094 2 43.125 2 Z M 37.34375 6.03125 C 37.117188 6.0625 36.90625 6.175781 36.75 6.34375 L 4.3125 38.8125 C 4.183594 38.929688 4.085938 39.082031 4.03125 39.25 L 2.03125 46.75 C 1.941406 47.09375 2.042969 47.457031 2.292969 47.707031 C 2.542969 47.957031 2.90625 48.058594 3.25 47.96875 L 10.75 45.96875 C 10.917969 45.914063 11.070313 45.816406 11.1875 45.6875 L 43.65625 13.25 C 44.054688 12.863281 44.058594 12.226563 43.671875 11.828125 C 43.285156 11.429688 42.648438 11.425781 42.25 11.8125 L 9.96875 44.09375 L 5.90625 40.03125 L 38.1875 7.75 C 38.488281 7.460938 38.578125 7.011719 38.410156 6.628906 C 38.242188 6.246094 37.855469 6.007813 37.4375 6.03125 C 37.40625 6.03125 37.375 6.03125 37.34375 6.03125 Z" />
                        </svg>
                    </button>
                </p>
                <h2 className="task__title">{name}</h2>
                <div className="task__info">
                    <div className="task__status">
                        Status: <span>{status}</span>
                    </div>
                    <div className="task__priority">
                        Priority: <span>{priority}</span>
                    </div>
                </div>
                <div className="task__date-info">
                    <div>Start date: <span>{moment(startDate, format.in).format(format.out)}</span></div>
                    <div>Time to done: <span>{timeToDone.value + " " + timeToDone.unit}</span></div>
                    <div>End date: <span>{moment(startDate, format.in).add(timeToDone.value, timeToDone.unit).format(format.out)}</span></div>
                </div>
            </div>
            <div className="task__body">
                <div className="task__description">
                    <h4>Description:</h4>
                    <p>{description}</p>
                </div>
                <div className="task__comments">
                    <button className="tasks__create-comment" type="button" onClick={() => setOpenModal(true)}>Create a comment</button>
                    <CommentsList taskId={taskId}/>
                </div>
            </div>
            { openModal && 
                <Popup closeModal={() => setOpenModal(false)}>
                    <TaskForm curTask={{ id, number, name, priority, timeToDone, description }}/>
                </Popup>
            }
        </div>
    )
}

export default SingleTaskPage