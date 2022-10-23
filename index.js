import express from 'express';
import nunjucks from 'nunjucks';
import bodyParser from 'body-parser';
import path from 'path';
import {fileURLToPath} from 'url';
import {updateJsonFile,downloadJsonFile} from './scripts/taskList.js';

//path to index file
const __filename = fileURLToPath(import.meta.url);
//path to head server directory  of index file
const __dirname = path.dirname(__filename);
//what does express() function do??
const app = express();
//what does this do?
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
//tell express where static files are
app.use(express.static(__dirname + '/public'));
const port = 3000;
nunjucks.configure('./public/views', {
	//what is this?
	autoescape: true,
	express: app
});
app.get('/',(req,res) => {
	res.render('home.html');
});
//Getting Post Data
app.post('/addData',(req,res) =>{
	let data = req.body;
	console.log(data);
});
app.listen(port,() => {
});

let task = {
  task: 'Drink Coffee',
  id: '12',
};

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
function updateTask(originalTask,updatedTask){
  downloadJsonFile((err,taskList) =>{
		console.log('running download');
    if(err){
      return console.log(err);
    }
		console.log('Old list', taskList);
		console.log('Looking for',originalTask);
		//Issue using arr functions to find instance of the same object
		//js objects are compared with mem addresses not values
		let taskPos = taskList.findIndex(task => task.taskid === originalTask.taskid);
		//findIndex returns -1 if the id doesnt exist
		if(taskPos === 1){
			return console.log(`Task Id: ${originalTask.id} does not exist `);
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

function deleteTask(taskToDelete){
	downloadJsonFile((err,taskList) =>{
		if(err){
			return console.log(err);
		}

		let taskPos = taskList.findIndex(task => task.taskid === taskToDelete.taskid);
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
//deleteTask(newsample);
//addTask(sample);
//updateTask(sample,newsample);
