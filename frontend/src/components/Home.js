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
  const [selectedTask, setSelectedTask] = useState(null);

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

  function openTaskPopup(task) {
    setSelectedTask(task);
    document.getElementById('taskDetailsWindow').showModal();
  }

  function closeTaskPopup() {
    document.getElementById('taskDetailsWindow').close();
    setSelectedTask(null);
  }

  return (
    <div id="mainContainer">
      <main>
        <div id="taskStorage">
          <div id="taskStorageHeader">
            <h2>Task Panel</h2>
          </div>
          <div id="taskStoragePanel">
            {tasks.length === 0 ? (
              <p>You have no tasks registered! <br></br>
              Press "Create New Task" to add a task!
              </p>
            ) : (
              tasks.map((task, index) => (
                <button
                  key={index}
                  className="taskButton"
                  onClick={() => openTaskPopup(task)}
                >
                  {task.name}
                </button>
              ))
            )}
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
              onChange={(e) => setTaskName(e.target.value.slice(0, 50))}
              placeholder="Enter task name"
              maxLength={30}
            />

            <p>Task Details:</p>
            <input
              type="text"
              value={taskDetails}
              onChange={(e) => setTaskDetails(e.target.value.slice(0, 50))}
              placeholder="Enter task details"
              maxLength={200}
            />

            <p>Task Assignees:</p>
            <input
              type="text"
              value={taskAssignees}
              onChange={(e) => setTaskAssignees(e.target.value.slice(0, 50))}
              placeholder="Enter task assignees"
              maxLength={200}
            />

            <p>Task Date:</p>
            <input
              type="date"
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value.slice(0, 50))}
            />
            <input
              type="time"
              value={taskTime}
              onChange={(e) => setTaskTime(e.target.value.slice(0, 50))}
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

          <dialog id="taskDetailsWindow">
            {selectedTask && (
              <div>
                <h2>{selectedTask.name}</h2>
                <p>Details: {selectedTask.details}</p>
                <p>Assignees: {selectedTask.assignees}</p>
                <p>
                  Start Date: {selectedTask.date} {selectedTask.time}
                </p>
                <p>
                  Due Date: {selectedTask.dueDate} {selectedTask.dueTime}
                </p>
                <button onClick={closeTaskPopup}>Close</button>
              </div>
            )}
          </dialog>
        </div>
      </main>
    </div>
  );
}


export default Main;
