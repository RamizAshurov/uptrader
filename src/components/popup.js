import { useParams } from "react-router-dom"
import TaskForm from "./task-form";
import CommentForm from "./comment-form";

import "./login-popup.css"

function Popup(props) {
    const { closeModal } = props;
    const { taskId } = useParams()

    const handleClick = (e) => {
        if (e.target.classList.contains("modal__container") || e.target.classList.contains("modal__close")) {
            closeModal()
        }
    }

    return (
        <div className="modal header__modal">
            <div className="modal__container" onClick={handleClick}>
                <div className="modal__content">
                    <div className="modal__close"></div>
                    <div className="modal__header">
                        <h2 className="modal__title">Add a task</h2>
                    </div>
                    <div className="modal__body">
                        {taskId ? <CommentForm closeModal={closeModal}/> : <TaskForm closeModal={closeModal} />}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Popup