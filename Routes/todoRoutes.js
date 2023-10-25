const {Router} = require("express");
const { getTodo, saveTodo, updateTodo, deleteTodo } = require("../controller/TodoController");
const route = Router();

route.get('/',getTodo);
route.post('/saveTodo',saveTodo);
route.post('/updateTodo',updateTodo);
route.post('/deleteTodo',deleteTodo);

module.exports = route;