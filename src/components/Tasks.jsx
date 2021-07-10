import React from "react";

import Task from "./Task";

const Tasks = ({ tasks, handleTaskClick, handleTaskdeletion }) => {
    return (
        <>
        {tasks.map((task) => (
        <Task key={task.id} task={task} handleTaskClick={handleTaskClick} handleTaskdeletion={handleTaskdeletion}/>
        ))}
        </>
    )
};

export default Tasks;