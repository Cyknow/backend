const express = require("express");
const { CreateEmail, EmailUpdate, deleteEmail, GetSingleEmail, GetallEmail, } = require("../controller/EmailController");
// const { LoginUser } = require("../controllers/Login");


const router = express.Router()

// router.get("/", GetallTask);
// router.get("/:Id", GetSingleTask);
// router.delete("/:Id", DeleteSingleTask);
// router.put("/:Id", UpdateSingleTask);


    router.post("/", CreateEmail);

    router.put("/:id", EmailUpdate);

    router.delete("/:id", deleteEmail);

    router.get("/:id", GetSingleEmail);

    router.get("/", GetallEmail);
        
    // router.get("/:Id", GetSingleTask);

       
module.exports=router