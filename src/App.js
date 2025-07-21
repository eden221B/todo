import React, { useState } from 'react';
import './App.css';

function App() {
  const [heading, setHeading] = useState('');
  const [body, setBody] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    if (heading.trim() || body.trim()) {
      setTasks([...tasks, { heading, body }]);
      setHeading('');
      setBody('');
    }
  };

  const handleDeleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
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
          placeholder="Enter Tasks"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          rows={5}
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>

      <ul className="task-list">
        {tasks.map((task, index) => (
          <li key={index} className="task-item">
            <div className="task-content">
              <h3>{task.heading}</h3>
              <pre>{task.body}</pre>
            </div>
            <button onClick={() => handleDeleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
