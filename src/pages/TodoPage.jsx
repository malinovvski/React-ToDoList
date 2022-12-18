import { useState } from "react";
import FilterList from "../components/FilterList";
import TaskInput from "../components/TaskInput";
import TaskList from "../components/TaskList";



export default function TodoPage() {

    const [tasks, setTasks] = useState([])

    const addNewTask = (NewTask) => {
        setTasks((prevTasks) => [...prevTasks, {
            label: NewTask,
            isChecked: false
        }])
    }

    const completeTask = (isChecked, label) => {
        setTasks((prevTasks) => prevTasks.map((prevTask) =>
            prevTask.label === label ? { label, isChecked } : prevTask))
    }

    return (
        <div>
            <TaskInput onNewTask={addNewTask} />
            <TaskList tasks={tasks} completeTask={completeTask} />
            <FilterList />

        </div>
    )
}