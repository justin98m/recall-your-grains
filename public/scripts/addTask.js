import {sendData} from './clientContactServer.js';
import {validTaskName} from './helper.js';
const TASK_LIST_CONTAINER = document.querySelector('.taskList');
const TEMPLATE_TASK = document.querySelector('.template');

let addTaskBtn = document.querySelector('.addTask');
addTaskBtn.addEventListener('click', addTask);
async function addTask(event){
  //dont actually submit anything yet
  event.preventDefault();
  let taskName = document.querySelector('#taskNameInput').value;
  //ensures task isnt empty or too long
  if(!validTaskName(taskName)){
    console.log('Invalid Task Name Length');
    return;
  }

  let taskData = {
    taskName: taskName,
  }
  //send task to server and if successful server will send task back
  await sendData(taskData,'POST')
  .then(response => response.json())
  .then(task => displayNewTask(task));

}
//add task to end of task list container
function displayNewTask(task){
  let taskNode = TEMPLATE_TASK.cloneNode(true);
  //template class will trigger css to hide node
  taskNode.classList.remove('template');
  taskNode.id = task.taskid;
  taskNode.querySelector('.taskName').value = task.taskName;

  TASK_LIST_CONTAINER.appendChild(taskNode);
}
