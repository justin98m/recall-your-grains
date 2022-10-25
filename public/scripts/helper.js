const MAX_TASKNAME_LENGTH = 75;

export function validTaskName(taskName){
  return taskName.length > 0 && taskName.length <= MAX_TASKNAME_LENGTH;
}

//return all the task containers with a checked checkbox
export function selectedTasks(){
  //returns array of task containers
  let tasks = Object.values(document.querySelectorAll('.taskContainer'));
  return tasks.filter(task => {
    let taskStatus = task.querySelector('.taskCheckbox');
    return taskStatus.checked;
  })
}
