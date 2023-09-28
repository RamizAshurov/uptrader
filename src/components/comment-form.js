import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux"

import commentsActions from "../store/commentsSlice/actions";

const CommentForm = ({ closeModal }) => {
    const { taskId } = useParams()
    const dispatch = useDispatch()

    const handleSubmit = e => {
        e.preventDefault();
        const formData = {
            taskId,
            author: e.target.elements["author"].value,
            text: e.target.elements["comment"].value
        }
    
        dispatch({
            type: commentsActions.addComment,
            payload: formData
        })
    
        e.target.reset();
        closeModal()
    }

    return (
        <form className="modal__form form" action="#" method="POST" onSubmit={handleSubmit}>
            <div className="form__input-wrapper">
                <label htmlFor="author">Author</label>
                <input type="text" name="author" placeholder="" />
            </div>
            <div className="form__input-wrapper">
                <label htmlFor="comment">Comment text</label>
                <textarea type="number" name="comment" placeholder="" rows="6"/>
            </div>
            <button type="submit" className="form__submit">Create a comment</button>
        </form>
    )
}

export default CommentForm