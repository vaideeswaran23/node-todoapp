import express from 'express';
import ejs from 'ejs';
import bodyParser from 'body-parser';
import path from 'path';

let task = [];

const app = express();
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const __dirname = path.resolve(path.dirname(''));
app.set('view engine', ejs); 

app.use('/assets', express.static(path.join(__dirname, '/assets')));

app.get("/", (req, res) => {
    res.render(__dirname + "/views/todo.ejs", {todo: task})
})

app.post("/todo", urlencodedParser, (req, res) => {
    console.log("req.body", req.body)
    task.push(req.body.task)
    res.render(__dirname + "/views/todo.ejs", {todo: task})
})

app.delete("/todo", (req, res) => {
    console.log("delete", req.query.index, task)
    task.splice(req.query.index, 1)
    console.log("task", task)
    res.render(__dirname + "/views/todo.ejs", {todo: task})
})

app.listen(3000, () => {
    console.log("Server started at 3000");
})