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
app.get('/',(req,res) => {
	res.render('home.html');
});
app.get('/taskList',(req,res) =>{
	console.log('im running');
	res.sendFile(__dirname + '/taskList.json',{},(err) =>{
		if(err){
			return console.log(err);
		}
		console.log(__dirname + '/taskList.json');
	});
});
//Getting Post Data
app.post('/addData',(req,res) =>{
	let data = req.body;
	switch(data.action){
		case 'addTask':
		addTask({taskName: data.taskName},(err,result) => res.send(result));
		break;

		case 'updateTask':
			updateTask(data.taskid,{taskName: data.taskName},(err,result) => {
				res.send('Data Added');
			});
			break;

		case 'deleteTask':
			deleteTask(data.taskids,(err,result) => res.send('Data Deleted'));
	}
});

app.listen(port,() => {
});
