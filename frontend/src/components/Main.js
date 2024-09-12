import React from 'react';

function Main() {
function OpenTaskWindow() {document.getElementById('taskWindow').showModal()}
function CloseTaskWindow() {document.getElementById('taskWindow').close()}
  return (
    <main>
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
  );
}

export default Main;