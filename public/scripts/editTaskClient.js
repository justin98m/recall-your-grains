import {selectedTasks,validTaskName} from './helper.js';
import {sendData,getData} from './clientContactServer.js';
const EDITBTN = document.querySelector('.editBtn');
const MESSAGE = document.querySelector('.message');

EDITBTN.addEventListener('click',(event)=>{
  let selectedTaskList = selectedTasks();

  if(selectedTaskList.length === 0){
    return MESSAGE.innerHTML = 'Must Select a task to edit';
  } else if (selectedTaskList.length > 1){
    return MESSAGE.innerHTML = 'Must select 1 task ONLY to edit';
  }
  let taskContainer = selectedTaskList[0];
  let taskNameInput = taskContainer.querySelector('.taskName');
  //Bring to top
  //enable edititing of task name
  taskNameInput.readOnly = false;
  //highlight text
  taskNameInput.select();
  //wait for change
  taskNameInput.addEventListener('change',editTask);
      //validate task
  //selectedTaskList[0].querySelector('#taskNameInput');

  //remove event listener
})
function editTask(event){
  event.target.readOnly = true;
  let taskName = event.target.value;
  let taskid = Number(event.target.parentNode.id)
  //validate task
  if(!validTaskName(taskName)){
    return MESSAGE.innerHTML = 'Invalid Task Name';
  }
  let data = {
    taskName : taskName,
    action: 'updateTask',
    taskid : taskid
  }
  console.log(data);
  sendData(data)

}

function updateContent(){
}
