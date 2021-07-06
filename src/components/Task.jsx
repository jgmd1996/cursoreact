import React from 'react';
import { CgClose, CgInfo } from "react-icons/cg";

import './Task.css'
const Task = ({ task, handleTaskClick, handleTaskdeletion }) => {
    return (
        <div className="task-container"
            style={task.completed ? { borderLeft: '6px solid chartreuse' } : {}}
        >
            <div className="task-title" onClick={() => handleTaskClick(task.id)}>
                {task.title}
            </div>

            <div className="buttons-container">
                <button
                    className="remove-task-button"
                    onClick={() => handleTaskdeletion(task.id)}
                >
                    <CgClose />
                </button>
                <button
                    className="see-task-details-button"
                >
                    <CgInfo />
                </button>
            </div>
        </div>
    );
};

export default Task;