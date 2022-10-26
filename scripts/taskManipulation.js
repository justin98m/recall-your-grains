import {downloadJsonFile,updateJsonFile} from './json-functions.js';

function addTask(newtask,cb){
  downloadJsonFile((err,taskList) =>{
    if(err){
      return console.log(err);
    }
    newtask.taskid =  Math.floor(Math.random() * 100000) ;

    taskList.push(newtask);

    updateJsonFile(taskList,(err,success) =>{
      console.log('Write has ran');
      if(err){
        return cb(err,null);
      }
      cb(null,taskList);
    })
  })
}
function updateTask(originalTaskid,updatedTask,cb){
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
    updatedTask.taskid = originalTaskid;
    //replace old task with new task
    taskList.splice(taskPos,1,updatedTask);
    updateJsonFile(taskList,(err,success) =>{
      console.log('Write has ran');
      if(err){
        return cb(null,err);
      }
      return cb(null,success)
    })
  })
}

function deleteTask(taskids,cb){
	downloadJsonFile((err,taskList) =>{
		if(err){
			return console.log(err);
		}
    taskids.forEach(deleteid => {
      let taskPos = taskList.findIndex(task => task.taskid === deleteid);
      if(taskPos === -1){
        return console.log('Task does not exist');
      }
      taskList.splice(taskPos,1);
    });
  updateJsonFile(taskList,(err,success) => {
			if(err){
				return cb(err,null);
			}
			return cb(null,err);
		})
	})
}



export {
  deleteTask,
  updateTask,
  addTask
}
