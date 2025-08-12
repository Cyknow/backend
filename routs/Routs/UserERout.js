const express = require("express");
const { CreateUser, Login, UpdateUser, deleteUser, GetSingleUser, GetallUser, } = require("../controller/UserEController");
// const { LoginUser } = require("../controllers/Login");


const router = express.Router()

    router.post("/", CreateUser);

    router.post("/login", Login);

    router.put("/:id", UpdateUser);

    router.delete("/:id", deleteUser);

    router.get("/:id", GetSingleUser);

    router.get("/", GetallUser);
        
    // router.get("/:Id", GetSingleTask);

       
module.exports=router