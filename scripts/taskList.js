import fs from 'fs';
//Update and serve the json file
class TaskList {
  #jsonFile;
  updateJsonFile(tasks){
    tasks = JSON.stringify(tasks);
    fs.WriteFile('./taskList.json',tasks, (err,data) =>{
        if(err){
          return console.log(err);
        }
        console.log('success');
    })
  }
  downloadJsonFile(){
    fs.readFile('./taskList.json',(err,data) => {
      if(err){
        return console.log(err);
      }
      console.log(JSON.parse(data));
      return JSON.parse(data);
    });
  }
}
//Manage a individual task
//updating it
//deleting it
//creating a new task
class Task extends TaskList{
  constructor(){
    super();
    this.meep = 'test'
  }
}

export {
  TaskList,
  Task
}
