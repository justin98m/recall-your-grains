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
    if(err){
      return console.log(err);
    }
    if(!taskList.includes(originalTask)){
        //task does not exist
        return null
    }
    console.log('Old list', taskList);
    let taskPos = taskList.indexOf(originalTask);
    //replace old task with new task
    taskList.splice(taskPos,1,updateTask);
    console.log(taskList);
  //   updateJsonFile(taskList,(err,success) =>{
  //     console.log('Write has ran');
  //     if(err){
  //       return console.log(err);
  //     }
  //     return console.log(success);
  //   })
  // })
  })
}
let sample = {
  taskName: "Something else",
  taskid: 12
}
let newsample = {
  taskName: "really else really ",
  taskid: 12
}

//addTask(sample);
updateTask(sample,newsample);

//then put task in update json
// updateJsonFile(task,(err) =>{
//   if(err){
//     return console.log(err);
//   }
//   return
// })


// data[1].taskName = "Task 2";
// data[1].taskName = "Task 1"
// data.push({taskName: 'Looper', taskid: 2});
// hey.updateJsonFile(data);
