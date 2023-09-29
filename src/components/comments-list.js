import { useSelector, shallowEqual } from "react-redux";

import Comment from "./comment";

const CommentsList = (props) => {
    const { parentCommentId = null, taskId } = props;

    const comments = useSelector(state => (
        state.comments.filter(comment => comment.taskId === taskId && comment.parentCommentId === parentCommentId)
    ), shallowEqual)

    return (
        <div className="task__comments-list comments-list">
            {comments.map(comment => (
                <Comment key={comment.id} comment={comment} />
            ))}
        </div>
    )
}

export default CommentsList