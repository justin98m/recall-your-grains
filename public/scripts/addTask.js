import sendData from './clientContactServer.js';
const MAX_TASKNAME_LENGTH = 75;

let addTaskBtn = document.querySelector('.addTask');
addTaskBtn.addEventListener('click', addTask);
function addTask(event){
  //dont actually submit anything yet
  event.preventDefault();
  this.disabled = true;

  let taskName = document.querySelector('#taskNameInput').value;

  if(!validTaskName(taskName.length)){
    console.log('Invalid Task Name Length');
    return;
  }

  let taskData = {
    task: taskName,
    action : 'newTask'
  }
  let elementData = {
    btn : this,
    status: document.getElementById('newTaskStatus')
  }
  sendData(taskData,elementData);
}

function validTaskName(taskNameLength){
  return taskNameLength > 0 && taskNameLength <= MAX_TASKNAME_LENGTH;
}
