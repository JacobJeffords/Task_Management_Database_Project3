import React from 'react';
import './Main.css'

function Main() {
  function OpenTaskWindow() { document.getElementById('taskWindow').showModal() }
  function CloseTaskWindow() { document.getElementById('taskWindow').close() }
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

        <button id="createTask" onClick={OpenTaskWindow}>Create New Task</button>

        <dialog id="taskWindow">
          <h1>Enter Your Task</h1>
          <p>Task Name:</p><input></input>
          <p>Task Details:</p><input></input>
          <p>Task Assignees:</p><input></input>
          <p>Task Date:</p><input type="date"></input><input type="time"></input>
          <p>Task Due:</p><input type="date"></input><input type="time"></input>
          <br></br>
          <button onClick={CloseTaskWindow}>Submit Task</button>
        </dialog>
      </main>
    </div>
  );
}

export default Main;