import React, { useState, useRef } from 'react';
import './index.css';

function Main() {
  const taskWindowRef = useRef(null);
  const [taskName, setTaskName] = useState('');
  const [taskDetails, setTaskDetails] = useState('');
  const [taskAssignees, setTaskAssignees] = useState('');
  const [taskDate, setTaskDate] = useState('');
  const [taskTime, setTaskTime] = useState('');
  const [taskDueDate, setTaskDueDate] = useState('');
  const [taskDueTime, setTaskDueTime] = useState('');
  const [tasks, setTasks] = useState([]);

  function OpenTaskWindow() {
    document.getElementById('taskWindow').showModal();
  }

  function CloseTaskWindow() {
    document.getElementById('taskWindow').close();
  }

  function handleSubmitTask() {
    const newTask = {
      name: taskName,
      details: taskDetails,
      assignees: taskAssignees,
      date: taskDate,
      time: taskTime,
    };

    setTasks([...tasks, newTask]);
    setTaskName('');
    setTaskDetails('');
    setTaskAssignees('');
    setTaskDate('');
    setTaskTime('');
    setTaskDueDate('');
    setTaskDueTime('');

    CloseTaskWindow();
  }

  return (
    <div id="mainContainer">
      <main>
        <div id="taskStorage">
          <div id="taskStorageHeader">
            <h2>Task Panel</h2>
          </div>
          <div id="taskStoragePanel">
            { }
          </div>
        </div>

        <div>
          <button id="createTask" onClick={OpenTaskWindow}>
            Create New Task
          </button>

          <dialog id="taskWindow" ref={taskWindowRef}>
            <h1>Enter Your Task</h1>

            <p>Task Name:</p>
            <input
              type="text"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
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

            <p>Task Due Date:</p>
            <input
              type="date"
              value={taskDueDate}
              onChange={(e) => setTaskDueDate(e.target.value)}
            />
            <input
              type="time"
              value={taskDueTime}
              onChange={(e) => setTaskDueTime(e.target.value)}
            />

            <br />
            <button onClick={handleSubmitTask}>Submit Task</button>
          </dialog>
        </div>
      </main>
    </div>
  );
}

export default Main;
