import React, { useState } from 'react';
import './App.css';

function App() {
  const [heading, setHeading] = useState('');
  const [body, setBody] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    if (heading.trim() || body.trim()) {
      setTasks([...tasks, { heading, body, done: false }]);
      setHeading('');
      setBody('');
    }
  };

  const handleDeleteTask = (index) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this task?');
    if (confirmDelete) {
      setTasks(tasks.filter((_, i) => i !== index));
    }
  };
  

  const toggleDone = (index) => {
    const updated = [...tasks];
    updated[index].done = !updated[index].done;
    setTasks(updated);
  };

  return (
    <div className="container">
      <h1>To-Do List</h1>

      <div className="input-section">
        <input
          type="text"
          placeholder="Task Heading"
          value={heading}
          onChange={(e) => setHeading(e.target.value)}
        />
        <textarea
          placeholder="Task Description"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          rows={5}
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>

      <ul className="task-list">
        {tasks.map((task, index) => (
          <li key={index} className={`task-item ${task.done ? 'done' : ''}`}>
            <div className="task-content">
              <h3>{task.heading}</h3>
              <pre>{task.body}</pre>
            </div>
            <div className="task-buttons">
              <button onClick={() => toggleDone(index)}>
                {task.done ? 'Undo' : 'Mark as Done'}
              </button>
              <button onClick={() => handleDeleteTask(index)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
