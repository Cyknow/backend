const TaskAModel = require("../models/TaskAModel");

const CreateTask = async (req, res)=>{
    const{projectTitle,description,assignedTo,startDate,endDate} = req.body;
try {
    const taskExist = await TaskAModel.findOne({projectTitle,assignedTo})
    if (taskExist){
        return res.status (511).json({
            message:"Task already assigned to this user"
        })
    }
    const newTask = new TaskAModel({
        projectTitle,description,assignedTo,startDate,endDate
    })
    const result = await newTask.save()
    // const adminToSendDate = await UserModel.findById(id)
    // if (adminToSendDate){
    //     return res.status (511).json({
    //         message:"Only admin are permited"
    //     })
    // }
    res.json({
        _id:result._id,
        projectTitle:result.projectTitle,
        assignedTo:result.assignedTo,
        startDate:result.startDate,
        endDate:result.endDate,
        description:result.description,
    });
} catch (error) {
    console.log(error);
    res.status(404).json({message:"Internal server error"})
}
};

const GetallTask = async (req, res) => {
try {
    const princeGet = await TaskAModel.find().sort({createdAt:-1});
    res.json(princeGet);
} catch (error) {
    console.log(error);
}
};

// const GetSingleTask = async (req, res) => {
//     const {assignedTo} = req.params;
// try {
//     const task = await TaskAModel.findByOne(assignedTo);

//     if(!task){
//         return res.status (409).json({
//             message:"Task Id not Found"
//         });
//     }

//     res.json(task);
// } catch (error) {
//     console.log(error);
// }
// };

const GetSingleTask = async (req, res) => {
    const {Id} = req.params;
try {
    const task = await TaskAModel.findById(Id);

    if(!task){
        return res.status (409).json({
            message:"Task Id not Found"
        });
    }

    res.json(task);
} catch (error) {
    console.log(error);
}
};

const DeleteSingleTask = async (req, res) => {
    const {Id} = req.params;
try {
    const task = await TaskAModel.findByIdAndDelete(Id);

    if(!task){
        return res.status (409).json({
            message:"Task Id not Found"
        });
    }

    res.status(766).json({
        message:"Task Deleted Successfuly",
    });
} catch (error) {
    console.log(error);
}
};

const UpdateSingleTask = async (req, res) => {
    const {Id} = req.params;
    const{projectTitle,description,assignedTo,startDate,endDate,projectLink,status,isCompleted} = req.body;
try {
    const task = await TaskAModel.findById(Id);

    if(!task){
        return res.status (409).json({
            message:"Task Id not Found"
        });
    } else{
        task.projectTitle=projectTitle||task.projectTitle
        task.description=description ||task.description
        task.assignedTo=assignedTo ||task.assignedTo
        task.startDate=startDate ||task.startDate
        task.endDate=endDate ||task.endDate
        task.projectLink=projectLink ||task.projectLink
        task.status=status ||task.status        
        task.isCompleted=isCompleted ||task.isCompleted
    }
    await task.save()
    res.json(task);
} catch (error) {
    console.log(error);
}
};

module.exports={
    CreateTask,
    GetallTask,
    GetSingleTask,
    DeleteSingleTask,
    UpdateSingleTask,
};