import { getFromLocalStorage } from "../../utils/localStorage"

const data = [
    {
        id: "1",
        name: "Food app",
        description: "Turkey food",
    },
    {
        id: "2",
        name: "Fitness app",
        description: "Build a body",
    },
    {
        id: "3",
        name: "Plendy app",
        description: "Start-up app",
    }
]

const initialState = getFromLocalStorage(data, "projects")

export { initialState } 