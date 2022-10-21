import express from 'express';
import nunjucks from 'nunjucks';
import bodyParser from 'body-parser';
import path from 'path';
import {fileURLToPath} from 'url';
import {TaskList,Task} from './scripts/taskList.js';

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
let hey = new Task();
let data = hey.downloadJsonFile();

// data.push({taskName: 'Looper', taskid: 2});
// hey.updateJsonFile(data);
