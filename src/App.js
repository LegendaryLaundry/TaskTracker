import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import TaskForm from './components/TaskForm';
import TaskList
 from './components/TaskList';
function App() {
	const [task, setTask] = useState([]);
	const [totalTaskCount, setTotalTaskCount] = useState(0);
 

  useEffect(() => {
    let temp = 0;
    for(let i = 0; i<task.length;i++){
      temp+=parseInt(1);
    }
    setTotalTaskCount(temp);
  }, [task]);
	

	return (
		<div className="App">
			<Header totalTaskCount={totalTaskCount} />
      <TaskForm task={task} setTask={setTask}/>
      <TaskList task={task} setTask={setTask}/>
      
      
			{/* <TaskForm task={task} setTask={setTask} />
			<TaskList task={task} setTask={setTask} /> */}
		</div>
	);
}

export default App;