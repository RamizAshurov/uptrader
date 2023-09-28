import { getFromLocalStorage } from "../../utils/localStorage";
import commentsActions from "./actions"

const initialState = getFromLocalStorage([], "comments")

const commentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case commentsActions.addComment: {
            const { taskId, author, text } = action.payload;
            return [
                ...state,
                {
                    id: state.length + 1 + "",
                    taskId,
                    author,
                    text
                }
            ]
        }
        default:
            return state
    }
}

export default commentsReducer