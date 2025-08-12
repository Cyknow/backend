const express = require("express");
const { CreateUser, Login, UpdateUser, deleteUser, GetSingleUser, GetallUser, } = require("../controllers/UserController");
// const { LoginUser } = require("../controllers/Login");


const router = express.Router()

// router.get("/", GetallTask);
// router.get("/:Id", GetSingleTask);
// router.delete("/:Id", DeleteSingleTask);
// router.put("/:Id", UpdateSingleTask);


    router.post("/", CreateUser);

    router.post("/login", Login);

    router.put("/:id", UpdateUser);

    router.delete("/:id", deleteUser);

    router.get("/:id", GetSingleUser);

    router.get("/", GetallUser);
        
    // router.get("/:Id", GetSingleTask);

       
module.exports=router