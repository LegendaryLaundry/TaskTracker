import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ task, setTask}) {
    
    const removeTask = i => {
        let temp = task.filter((v, index) => index !== i);
        setTask(temp); 
    }

    const sortByDate = (a, b) => {
        return a.date - b.date;
    }

    return (
        <div className="task-list">
            {
                task.sort(sortByDate).map((value, index) => (
                    <TaskItem
                    key={index}
                    task={value}
                    index={index}
                    removeTask={removeTask}
                    />
                ))
            }
        </div>
    )
}

export default TaskList;