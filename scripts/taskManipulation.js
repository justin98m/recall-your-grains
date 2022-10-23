import {downloadJsonFile,updateJsonFile} from './json-functions.js';

function addTask(newtask){
  downloadJsonFile((err,taskList) =>{
    if(err){
      return console.log(err);
    }
    taskList.push(newtask);
    updateJsonFile(taskList,(err,success) =>{
      console.log('Write has ran');
      if(err){
        return console.log(err);
      }
      return console.log(success);
    })
  })
}
function updateTask(originalTaskid,updatedTask){
  downloadJsonFile((err,taskList) =>{
		console.log('running download');
    if(err){
      return console.log(err);
    }
		//Issue using arr functions to find instance of the same object
		//js objects are compared with mem addresses not values
		let taskPos = taskList.findIndex(task => task.taskid === originalTaskid);
		//findIndex returns -1 if the id doesnt exist
		if(taskPos === -1){
			return console.log(`Task Id: ${originalTaskid} does not exist `);
		}
		console.log(taskPos);
    //replace old task with new task
    taskList.splice(taskPos,1,updatedTask);
    updateJsonFile(taskList,(err,success) =>{
      console.log('Write has ran');
      if(err){
        return console.log(err);
      }
      return console.log(success);
    })
  })
}

function deleteTask(taskid){
	downloadJsonFile((err,taskList) =>{
		if(err){
			return console.log(err);
		}
    console.log(taskList);
		let taskPos = taskList.findIndex(task => task.taskid === taskid);
    console.log(taskList[0].taskid);
    console.log(taskid);
		if(taskPos === -1){
			return console.log('Task does not exist');
		}
		taskList.splice(taskPos,1);

		updateJsonFile(taskList,(err,success) => {
			if(err){
				return console.log(err);
			}
			return console.log('success');
		})
	})
}

export {
  deleteTask,
  updateTask,
  addTask
}
