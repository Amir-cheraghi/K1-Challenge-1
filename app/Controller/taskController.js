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

    async showTaskById(req,res,next){
        try{
        const data = await Task.findById(req.params.id)
        res.json({
            status : "Success",
            data 
        })
    }catch(err){
        console.log(err)
        res.json({
            status : "Error",
            message : "Some Error While Showing This Task Has Been Apeared"
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


    async editTask(req,res,next){
        try{
        await Task.findByIdAndUpdate(req.params.id,req.body)
        const updatedTask =await Task.findById(req.params.id)
        res.json({
            status : "Success",
            message : "Task Has Been Successfully Updated",
            data : updatedTask
        })
    } catch(err){
        console.log(err)
        res.json({
            status : "Error",
            message : "While Updateing Some Error Has Been Apeared !!!"
        })
    }
    }

    async deleteTask(req,res,next){
        try{
        const deletedTask = await Task.findByIdAndDelete(req.params.id)
        res.json({
            status : "Success",
            message : "The Following Task Successfully Removed",
            data : deletedTask
        })
    } catch(err){
        console.log(err)
        res.json({
            status : "Error",
            message : "While Removing Task Some Error Has Been Apeared"
        })
    }
    }

   

}



