import { getFromLocalStorage } from "../../utils/localStorage";
import commentsActions from "./actions"

// const initialState = [
//     {
//         id: "1",
//         taskId: "1",
//         author: "Ramiz",
//         text: "La la la la la",
//         parentCommentId: null,
//         replies: ["2", "5", "6"],
//     },
//     {
//         id: "2",
//         taskId: "1",
//         author: "David",
//         text: "Mugen",
//         parentCommentId: "1",
//         replies: [],
        
//     },
//     {
//         id: "3",
//         taskId: "1",
//         author: "David",
//         text: "Hashiraaaaaama",
//         parentCommentId: "1",
//         replies: [],
        
//     },
//     {
//         id: "4",
//         taskId: "1",
//         author: "David",
//         text: "Shinoo",
//         parentCommentId: "1",
//         replies: ["5", "6"],
        
//     },
//     {
//         id: "5",
//         taskId: "1",
//         author: "David",
//         text: "Link link link",
//         parentCommentId: "4",
//         replies: [],
        
//     },
//     {
//         id: "6",
//         taskId: "1",
//         author: "David",
//         text: "Give a liiink",
//         parentCommentId: "4",
//         replies: [],
        
//     },
//     {
//         id: "7",
//         taskId: "1",
//         author: "Ramiz",
//         text: "La la la la la",
//         parentCommentId: null,
//         replies: [],
//     },
// ]

const initialState = getFromLocalStorage([], "comments")

const commentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case commentsActions.addComment: {
            const { taskId, author, text, parentCommentId } = action.payload;
            const newId = state.length + 1 + ""
            const newComment = {
                id: newId,
                taskId,
                author,
                text,
                parentCommentId,
                replies: []
            }

            if (parentCommentId) {
                let newState = state.map(comment => {
                    if (comment.id === parentCommentId) {
                        return { 
                            ...comment,
                            replies: [...comment.replies, newId]
                        }
                    }
                    return comment
                })
                return [...newState, newComment]
            }

            return [...state, newComment]
        }
        default:
            return state
    }
}

export default commentsReducer