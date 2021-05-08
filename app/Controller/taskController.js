const Task = require('./../Models/task')



module.exports = new class taskController{

    async showAllTask(req,res,next){
        try{
        const tasks = await Task.find()
        res.json({
            status : "Success",
            data : tasks
        })
        } catch(err){
            console.log(err)
            res.json({
                status : "error",
                message : "Error"
            })
        }
    }



    async createTask(req,res,next){
        try {
            const task = await Task.create({
                name : req.body.name,
                type : req.body.type,
                description : req.body.description
            })

            res.json({
                status : "Success",
                message : "Task Created Successfully",
                data : task
            })
        } catch (err) {
            console.log(err)
            res.json({
                status : 'error',
                message : "While Create Task Some Error Has Been Appeared"
            })
        }
    }

   

}



