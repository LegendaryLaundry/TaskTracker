import React, {useRef, useState} from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBook, faBookOpen } from '@fortawesome/free-solid-svg-icons'


function TaskForm({ task, setTask}) {
    const description = useRef(null);
    const date = useRef(null);
    const taskName = useRef(null);
   


    const AddTask = e => {
        e.preventDefualt();

        let d = date.current.value.split("-");
        let newD = new Date(d[0], d[1] - 1, d[2]);

        setTask([...task, {
            "description": description.current.value,
            "date": newD.getTime(),
            "taskName": taskName.current.value,
        }]);

        description.current.value = "";
        taskName.current.value = null;
        date.current.value = null;
    }

    return (
        <form className="task-form" onSubmit={AddTask}>
            <div className="form-inner">
                <input type="text" name="taskName" id="taskName" placeholder ="To-Do..." ref={taskName}/>
                <input type="date" name="date" id="date" placeholder="Task date..." ref={date} />
                <input type="text" name="description" id="description" placeholder="Task Details..." ref={description} />
                <input type="submit" value="Add Task"/>
            </div>
        </form>
    )
}

export default TaskForm;