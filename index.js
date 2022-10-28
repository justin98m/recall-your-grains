import express from 'express';
import nunjucks from 'nunjucks';
import bodyParser from 'body-parser';
import path from 'path';
import {fileURLToPath} from 'url';
import {downloadJsonFile} from './scripts/json-functions.js';
import {updateTask,deleteTask,addTask} from './scripts/taskManipulation.js'
//path to index file
const __filename = fileURLToPath(import.meta.url);
//path to head server directory  of index file
const __dirname = path.dirname(__filename);
const app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
//tell express where static files are
app.use(express.static(__dirname + '/public'));
const port = 3000;
nunjucks.configure('./public/views', {
	autoescape: true,
	express: app
});
//get tasks from json file and render page with the task object
app.get('/',(req,res) => {
	downloadJsonFile((err,result) => {
		if(err){
			return console.log('Err: ',err);
		}
		console.log(result);
		let data;
		res.render('home.html', data = {
			taskList : result
		});
	})
});
//Getting Post Data
app.post('/tasks',(req,res) =>{
	let data = req.body;
	console.log('add task');
	addTask({taskName: data.taskName},(err,result) => res.send(JSON.stringify(result)));
});
app.delete('/tasks',(req,res) => {
	let data = req.body;
	//deletes passsed in ids and returns succesfully deleted ids
	deleteTask(data.taskids,(err,result) => res.send(JSON.stringify(result)));
})
app.put('/tasks',(req,res) => {
	let data = req.body;
	console.log('update taks');
	updateTask(data.taskid,{taskName: data.taskName},(err,result) => {
		res.send('Data Added');
	});
})

app.listen(port,() => {
});
