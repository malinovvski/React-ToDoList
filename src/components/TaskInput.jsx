import { useState } from "react"

export default function TaskInput(props) {
    const { onNewTask } = props
    const [userInput, setUserInput] = useState("")

    const addTask = () => {
        onNewTask(userInput)
        setUserInput("")
    }

    return (
        <div>
            <input type="text"
                className="inputbox"
                placeholder="Type task..."
                value={userInput}
                onChange={(event) => setUserInput(event.target.value)}></input>
            <button className="inputbutton" disabled={userInput === ""} onClick={addTask}>Add</button>
        </div>
    )
}