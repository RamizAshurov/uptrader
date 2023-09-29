import { initialState, taskStatus, taskPriority } from "./consts"
import moment from "moment";
import tasksActions from "./actions";

const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
        case tasksActions.addTask: {
            const { projectId, number, name, priority, timeToDone, description } = action.payload;
            const format = timeToDone.unit === "h" ? "lll" : "ll"
            const startDate = moment().format(format)

            return [
                ...state,
                {
                    id: state.length + 1 + "",
                    projectId,
                    number,
                    name,
                    status: taskStatus.queue,
                    priority,
                    startDate,
                    timeToDone,
                    description
                }
            ]
        }
        case tasksActions.changeStatus: {
            const { id, status } = action.payload;
            const taskIdx = state.findIndex(task => task.id === id)

            return [
                ...state.slice(0, taskIdx),
                {
                    ...state[taskIdx],
                    status
                },
                ...state.slice(taskIdx + 1)
            ]
        }
        case tasksActions.editTask: {
            const newTask = action.payload;
            return state.map(task => {
                if (task.id === newTask.id)
                    return {...task, ...newTask}
                return task
            })
        }
        default:
            return state
    }
}

export default tasksReducer

