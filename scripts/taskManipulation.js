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
      cb(null,newtask);
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
    //remove ids and make array containing successfully deleted ids
    let deletedIds = taskids.map(deleteid => {
      let taskPos = taskList.findIndex(task => task.taskid === deleteid);
      if(taskPos === -1){
        return  null;
      }
      taskList.splice(taskPos,1);
      return deleteid;
    });
    console.log('deleted: ',deletedIds);
  updateJsonFile(taskList,(err,success) => {
			if(err){
				return cb(err,null);
			}
			return cb(null,deletedIds);
		})
	})
}



export {
  deleteTask,
  updateTask,
  addTask
}
