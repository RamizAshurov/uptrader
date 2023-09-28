import { combineReducers } from "redux"

import projectsReducer from "./projectsSlice/projectsSlice"
import tasksReducer from "./tasksSlice/tasksSlice"
import commentsReducer from "./commentsSlice/commentsSlice"

const rootReducer = combineReducers({
    projects: projectsReducer,
    tasks: tasksReducer,
    comments: commentsReducer
})

export default rootReducer