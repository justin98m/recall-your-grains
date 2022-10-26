import {getData,sendData} from './clientContactServer.js';
import {validTaskName} from './helper.js';
import {updateDisplay} from './display.js';

let addTaskBtn = document.querySelector('.addTask');
addTaskBtn.addEventListener('click', addTask);
async function addTask(event){
  //dont actually submit anything yet
  event.preventDefault();
  let taskName = document.querySelector('#taskNameInput').value;
  if(!validTaskName(taskName)){
    console.log('Invalid Task Name Length');
    return;
  }

  let taskData = {
    taskName: taskName,
    action : 'addTask'
  }

  await sendData(taskData)
  .then(response => updateDisplay());

}
