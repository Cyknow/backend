const express = require("express");
const { CreateTask, GetallTask, GetSingleTask, DeleteSingleTask, UpdateSingleTask } = require("../controllers/Tasks");

const router = express.Router()

router.get("/", GetallTask);

// router.get("/:assignedTo", GetSingleTask);

router.get("/:Id", GetSingleTask);

router.delete("/:Id", DeleteSingleTask);

router.put("/:Id", UpdateSingleTask);


    router.get("/get/get/jy", (req, res)=>{
res.json({message:"Briliant"});
    });

    router.post("/", CreateTask);

    router.put("/", (req, res)=>{
res.json({message:"God Is The Greatest"});
    });

    router.delete("/", (req, res)=>{
res.json({message:"Bye Bye"});
    });
    
module.exports=router






// we're trying to export this router