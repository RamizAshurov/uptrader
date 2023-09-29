import { useState } from "react";

import CommentForm from "./comment-form";
import CommentsList from "./comments-list";
import Popup from "./popup";

const Comment = ({ comment }) => {
    const { id, author, text, taskId, replies } = comment;
    const [openModal, setOpenModal] = useState(false)

    return (
        <>
            <div className="task__comment comment">
                <div className="comment__wrapper">
                    <p className="comment__author">{author}</p>
                    <p className="comment__text">{text}</p>
                    <button 
                        type="button" 
                        className="comment__reply"
                        onClick={() => setOpenModal(true)}
                    >Reply</button>
                </div>
                { replies.length > 0 && <CommentsList taskId={taskId} parentCommentId={id}/>}
            </div>
            { openModal && 
                <Popup closeModal={() => setOpenModal(false)}>
                    <CommentForm parentCommentId={id}/>
                </Popup>
            }
        </>

    )
}

export default Comment