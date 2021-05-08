const Task = require('./../Models/task')



module.exports = new class taskController{

    async showAllTask(req,res,next){
        try{
        const tasks = await Task.find()
        res.json({
            status : Success,
            data : tasks
        })
        } catch(err){
            res.json({
                status : error
            })
        }
    }

   

}



