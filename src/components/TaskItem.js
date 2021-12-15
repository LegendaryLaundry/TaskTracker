import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserSlash } from '@fortawesome/free-solid-svg-icons'



function TaskItem({task, index, removeTask}){
    let date = new Date(task.date);
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    const removeHandle = i => {
        removeTask(i);
    }

    return (
        <div className="task-item">
            <button className="remove-item" onclick={() => removeHandle(index)}>
                <FontAwesomeIcon icon={faUserSlash}></FontAwesomeIcon>
            </button>
            <div className="taskName">{task.taskName}</div>
            <div className="description">{task.description}</div>
            <div className="date">{month + "/" + day + "/" + year}</div>
        </div>
    )
}

export default TaskItem;