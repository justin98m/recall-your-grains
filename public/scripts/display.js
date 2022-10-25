//Request Json from server
import {getData} from './clientContactServer.js'
//declare template
const TASK_LIST_CONTAINER = document.querySelector('.taskList');
//cloned so remove Task List doesnt send the node info into the void
const TEMPLATE_TASK = document.querySelector('.template').cloneNode(true);

function removeTaskList(){
  //having issues acessing array of task
  if(TASK_LIST_CONTAINER.querySelectorAll('.taskContainer').length !== 0){
    TASK_LIST_CONTAINER.querySelectorAll('.taskContainer').forEach(task => {
      task.remove()
    });
  }
  return
}

export async function updateDisplay(){
  console.log('updating display running');
  removeTaskList();
  //get data is a async functon
  let taskList =  await getData();
  //why does this not equate to undefined
  console.log(taskList);
  //Iterate through array
    taskList.forEach( task => {
        //give task its own node with correct attributes
        let taskNode = TEMPLATE_TASK.cloneNode(true);
        taskNode.removeAttribute('.template');
        taskNode.querySelector('.taskName').setAttribute('value',task.taskName);
        taskNode.id = task.taskid
        //add task to dom
        TASK_LIST_CONTAINER.appendChild(taskNode);
  });
}
//Runs immeadiatly when page is loaded
updateDisplay();
