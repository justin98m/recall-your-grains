import {getData,sendData} from './clientContactServer.js';
import validTaskName from './helper.js';

let addTaskBtn = document.querySelector('.addTask');
addTaskBtn.addEventListener('click', addTask);
function addTask(event){
  //dont actually submit anything yet
  event.preventDefault();
  this.disabled = true;

  let taskName = document.querySelector('#taskNameInput').value;

  if(!validTaskName(taskName)){
    console.log('Invalid Task Name Length');
    return;
  }

  let taskData = {
    task: taskName,
    action : 'newTask'
  }

  sendData(taskData);
}
