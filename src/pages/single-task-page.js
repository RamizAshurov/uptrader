import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useSelector } from "react-redux" 

import Popup from "../components/popup"

import moment from "moment"

const SingleTaskPage = () => {
    const [openModal, setOpenModal] = useState(false)
    const { taskId } = useParams()
    const navigate = useNavigate()
    const { number, name, description, status, priority, startDate, timeToDone} = useSelector(state => state.tasks.find(task => task.id === taskId))
    const comments = useSelector(state => state.comments.filter(comment => comment.taskId === taskId))

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
                        <polygon points="352,128.4 319.7,96 160,256 160,256 160,256 319.7,416 352,383.6 224.7,256 "/>
                    </svg>
                </button>
            <div className="task-page__header task__header">
                <p className="task__number">Task №{number}</p>
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
                    <div className="task__comments-list">
                        {comments.map(comment => (
                            <div key={comment.id} className="task__comment comment">
                                <p className="comment__author">{comment.author}</p>
                                <p className="comment__text">{comment.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            { openModal && <Popup closeModal={() => setOpenModal(false)} />}
        </div>
    )
}

export default SingleTaskPage