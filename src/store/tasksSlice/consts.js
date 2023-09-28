import { getFromLocalStorage } from "../../utils/localStorage"

const taskStatus = {
    queue: "queue",
    development: "development",
    done: "done"
}

const taskPriority = {
    low: "low",
    medium: "medium",
    high: "high"
}

const data = [
    { 
        id: "1",
        projectId: "1",
        number: "2324", 
        startDate: "Sep 25, 2023", 
        timeToDone: {
            value: "4",
            unit: "d"
        }, 
        name: "Create a design", 
        status: taskStatus.queue,  
        priority: "low",
        description: "Just looong description"
    },
    { 
        id: "2",
        projectId: "1",
        number: "2334", 
        startDate: "Sep 25, 2023", 
        timeToDone: {
            value: "2",
            unit: "d"
        },  
        name: "Take a photo", 
        status: taskStatus.development,  
        priority: "medium",
        description: "Go to nature, take a photos"
    },
    { 
        id: "3",
        projectId: "1",
        number: "2354", 
        startDate: "Sep 24, 2023", 
        timeToDone: {
            value: "1",
            unit: "d"
        }, 
        name: "Create a menu", 
        status: taskStatus.development,  
        priority: "high",
        description: "Middle Asia kitchen"
    },
    { 
        id: "4",
        projectId: "2",
        number: 3145, 
        startDate: "Sep 27, 2023", 
        timeToDone: {
            value: "5",
            unit: "d"
        }, 
        name: "Add a new programm", 
        status: taskStatus.queue,  
        priority: "medium",
        description: "Make UML diagram, algorithms, code, test, repeat until I win"
    },
    { 
        id: "5",
        projectId: "2",
        number: 3164, 
        startDate: "Sep 28, 2023", 
        timeToDone: {
            value: "5",
            unit: "d"
        },  
        name: "Make a re-design", 
        status: taskStatus.queue,  
        priority: "medium",
        description: "Nothings does not work"
    },
    { 
        id: "6",
        projectId: "2",
        number: 3248, 
        startDate: "Sep 28, 2023", 
        timeToDone: {
            value: "4",
            unit: "d"
        },  
        name: "Add payment system", 
        status: taskStatus.queue,  
        priority: "medium",
        description: "Visa, MasterCard, Mir"
    },
    { 
        id: "7",
        projectId: "3",
        number: 5563, 
        startDate: "Sep 28, 2023 8:20 PM", 
        timeToDone: {
            value: "7",
            unit: "h"
        },  
        name: "Eat", 
        status: taskStatus.queue,  
        priority: "high",
        description: "Kurtob: tomato, pies, chaka, non"
    },
    { 
        id: "8",
        projectId: "3",
        number: 4785, 
        startDate: "Sep 28, 2023 8:20 PM", 
        timeToDone: {
            value: "5",
            unit: "h"
        },  
        name: "Sleep", 
        status: taskStatus.development,  
        priority: "high",
        description: "Deeeeeep sleeep"
    },
    { 
        id: "9",
        projectId: "3",
        number: 5963, 
        startDate: "Sep 28, 2023 8:20 PM", 
        timeToDone: {
            value: "3",
            unit: "h"
        },  
        name: "Drink", 
        status: taskStatus.done,  
        priority: "high",
        description: "Mohito"
    },
]

const initialState = getFromLocalStorage(data, "tasks")

export { initialState, taskStatus, taskPriority }