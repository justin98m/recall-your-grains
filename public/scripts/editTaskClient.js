/*
  Listen for edit button to be clicked
      if mutliple tasks are selected
        inform the user only one task can be selected for editting
        return
      if no tasks are selected
        inform user one task must be selected
        return
      Bring selected task to focus
      Instruct user to hit enter when finished
      Allow user to enter new task name  on selected task
      when user clicks enter
        send current

  */
  //

  const EDITBTN = document.querySelector('.editBtn');
  const MESSAGE = document.querySelector('.message');

  //return all the task containers with a checked checkbox
  function selectedTasks(){
    //returns array of task containers
    let tasks = Object.values(document.getElementsByClassName('taskContainer'));
    return tasks.filter(task => {
      let taskStatus = task.querySelector('.taskCheckbox');
      return taskStatus.checked;
    })
  }

  EDITBTN.addEventListener('click',(event)=>{
    let selectedTaskList = selectedTasks();

    if(selectedTaskList.length === 0){
      return MESSAGE.innerHTML = 'Must Select a task to edit';
    } else if (selectedTaskList.length > 1){
      return MESSAGE.innerHTML = 'Must select 1 task ONLY to edit';
    }
    MESSAGE.innerHTML = 'saving task';
  })

  function updateContent(){
  }
