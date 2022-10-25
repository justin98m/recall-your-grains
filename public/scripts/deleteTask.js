import {updateDisplay} from './display.js';
import {selectedTasks} from './helper.js';
import {sendData} from './clientContactServer.js';
const trashIcon = document.querySelector('.trashImg');

trashIcon.addEventListener('click',deleteElements);

async function deleteElements(event){
  event.preventDefault();
  let taskList = selectedTasks();
  console.log("list: ",taskList);
  //iterate through list
  console.log(taskList.map(task => task.id));
  //when task(s) are deleted update the display
  await sendData({
    //return array of task ids
    taskids : taskList.map(task => Number(task.id)),
    action: 'deleteTask'
  }).then(response => updateDisplay());


  //update ui
}
