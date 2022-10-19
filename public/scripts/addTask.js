const MAX_TASKNAME_LENGTH = 75;
/*
client side add task pseudo code

Listen for user to click add button
  Validate input
  if (valid)
    Send data to server as new task
    data =
     task name
     task id
  else
    indicate error to user



Validate Taskname
  string is empty
    return false
0  > string length < 1000
    return true


*/
function addTask(event){
  //dont actually submit anything yet
  event.preventDefault();
  let taskName = document.querySelector('#taskNameInput').value;
  if(!validTaskName(taskName.length)){
    console.log('Invalid Task Name Length');
    return;
  }

}

function validTaskName(taskNameLength){
  return taskNameLength > 0 && taskNameLength <= MAX_TASKNAME_LENGTH;
}
let addTaskBtn = document.querySelector('.addTask');
addTaskBtn.addEventListener('click', addTask);
