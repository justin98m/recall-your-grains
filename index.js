import express from 'express'
import nunjucks from 'nunjucks'
import bodyParser from 'body-parser'
const app = express();
//what does this do?
app.use(bodyParser.urlencoded({extended:true}))
//tell express where static files are
app.use(express.static(__dirname + '/public'));
const port = 3000;
nunjucks.configure('./public/views', {
	//what is this?
	autoescape: true,
	express: app
});
app.get('/',(req,res) => {

	res.render('home.html',	data = {
		css: 'home.css'
	})
})

//Getting Post Data
app.post('/addTask',(req,res) =>{
	let data = {
	}

})


app.listen(port,() => {
})
