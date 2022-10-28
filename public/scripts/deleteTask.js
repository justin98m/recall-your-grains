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
  },'DELETE')
  .then(response => response.json())
  .then( deleteids => removeFromDom(deleteids))

}
function removeFromDom(deleteids){
  //get all the task container nodes
  const TASKS = Array.from(document.querySelector('.taskList')
  .querySelectorAll('.taskContainer'));
  console.log(`Delete IDs : ${deleteids} type ${typeof deleteids}`);
  //looks for the nodes matching the ids to delete
  TASKS.forEach(task =>{
    //indicate if the current node has an id to delete then delete it
    deleteids.forEach(deleteid => {
      if (Number(deleteid) === Number(task.id)){
          task.remove();
      }
    })
  });

}
