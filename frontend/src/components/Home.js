import React, { useState, useRef } from 'react';
import './index.css';

function Main() {
  function taskWindowRef = useRef(null);
  function OpenTaskWindow() { document.getElementById('taskWindow').showModal() }
  function CloseTaskWindow() { document.getElementById('taskWindow').close() }
  function [taskName, setTaskName] = useState('');
  function [taskDetails, setTaskDetails] = useState('');
  function [taskAssignees, setTaskAssignees] = useState('');
  function [taskDate, setTaskDate] = useState('');
  function [taskTime, setTaskTime] = useState('');
  function [tasks, setTasks] = useState([]);

  return (
    <div id="mainContainer">
      <main>

        <div id="taskStorage">
          <div id="taskStorageHeader">
            <h2>Task Panel</h2>
          </div>
          <div id="taskStoragePanel">

          </div>
        </div>
        
        <main>
          <button id="createTask" onClick={OpenTaskWindow}>
            Create New Task
          </button>

          <dialog id="taskWindow" ref={taskWindowRef}>
            <h1>Enter Your Task</h1>
            <p>Task Name:</p>
            <input
              type="text"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)} //event listener or handler react version
              placeholder="Enter task name"
            />

            <p>Task Details:</p>
            <input
              type="text"
              value={taskDetails}
              onChange={(e) => setTaskDetails(e.target.value)}
              placeholder="Enter task details"
            />

            <p>Task Assignees:</p>
            <input
              type="text"
              value={taskAssignees}
              onChange={(e) => setTaskAssignees(e.target.value)}
              placeholder="Enter task assignees"
            />

            <p>Task Date:</p>
            <input
              type="date"
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
            />
            <input
              type="time"
              value={taskTime}
              onChange={(e) => setTaskTime(e.target.value)}
            />

            <br></br>
            <button onClick={handleSubmitTask}>Submit Task</button>
          </dialog>
          <button onClick={CloseTaskWindow}>Submit Task</button>
        </dialog>
      </main>
    </div>
  );
}

export default Main;