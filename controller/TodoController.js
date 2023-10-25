const Todo = require("../model/Todo")

module.exports.getTodo = async(req,res)=>{
    const todo = await Todo.find()
    res.send(todo);
}

module.exports.saveTodo = async(req,res)=>{
    // --mine code
    // try{

    //     const {text} = req.body;
    //     const addTodo =await Todo.create({ text  });
    //     res.status(200).json({
    //         addTodo
    //     })
    // }
    // catch(error){
    //     console.log(error);
    //     res.status(500).json({
    //         message:"error occurred in saveTodo",
    //         error:error.message
    //     })
    // }

    // --tutor code--
    const{text} = req.body
    Todo.create({text})
    .then((data)=>{
        console.log("Added Successfully...");
        console.log(data);
        res.send(data);
    })
} 

module.exports.updateTodo  = async (req,res)=>{
    const{_id,text} = req.body
    Todo.findByIdAndUpdate(_id,{text})
    .then(()=>{res.send("Updated successfully...")})
    .catch((err)=>{console.log(err)})
}

module.exports.deleteTodo = async(req,res)=>{
    const {_id} = req.body
    Todo.findByIdAndDelete(_id)
    .then(()=>{res.send("deleted successfully...")})
    .catch((err)=>{console.log(err)})

}