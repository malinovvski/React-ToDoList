import { useState } from "react";
import FilterList from "../components/FilterList";
import TaskInput from "../components/TaskInput";
import TaskList from "../components/TaskList";

let idCounter = 0;

export default function TodoPage() {

    const [tasks, setTasks] = useState([])

    const addNewTask = (NewTask) => {
        setTasks((prevTasks) => [...prevTasks, {
            id: idCounter++,
            label: NewTask,
            isChecked: false
        }])
    }

    const completeTask = (isChecked, id) => {
        setTasks((prevTasks) =>
            prevTasks.map((prevTask) =>
                prevTask.id === id ? { id, label: prevTask.label, isChecked } : prevTask))
    }

    return (
        <div>
            <TaskInput onNewTask={addNewTask} />
            <FilterList />
            <TaskList tasks={tasks} completeTask={completeTask} />


        </div>
    )
}