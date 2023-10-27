import React, { useEffect, useState } from "react";
import { Task } from "./Task";


const Home = () => {

    const initialArray = localStorage.getItem("tasks") ? JSON.parse(localStorage.getItem("tasks")) : [];

    const [Tasks, setTasks] = useState(initialArray)
    const [Title, setTitle] = useState("")
    const [description, setdescription] = useState("")


    const submitHandler = (e) => {
        e.preventDefault();
        setTasks([...Tasks, { Title, description }]);
        setTitle("")
        setdescription("")
    }

    const deleteTask = (index) => {
        const filteredArr = Tasks.filter((val, i) => {
            return i !== index;
        });
        console.log(filteredArr)
        setTasks(filteredArr)
    }
    useEffect(() => {
        localStorage.setItem("Tasks", JSON.stringify(Tasks))
    }, [Tasks])

    // const [inputValue, setInpuValue] = useState(0)
    return (
        <div className="container">
            <h1>DAILY GOALS</h1>
            <form onSubmit={submitHandler}>
                <input
                    type="text"
                    placeholder="Title"
                    value={Title}
                    onChange={(e => setTitle(e.target.value))} />
                <textarea
                    placeholder="description"
                    value={description}
                    onChange={(e => setdescription(e.target.value))}>
                </textarea>
                <button type="submit" onClick={deleteTask}>Add</button>

            </form>
            {Tasks.map((item, index) => (
                <Task key={index} Title={item.Title} description={item.description} deleteTask={deleteTask} index={index} />
            ))}
        </div>
    )
}
export default Home;