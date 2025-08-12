// const express = require ("express")
// const dotenv = require("dotenv").config();
// // import express from "express"

// const server = express ();
// const port = process.env.port||8000;
// const studentInfo = [
//     {
//         "id": 1,
//         "title": "school",
//         "isCool": false
//     },
//     {
//         "id": 2,
//         "title": "church",
//         "isCool": true
//     },
//     {
//         "id": 3,
//         "title": "home",
//         "isCool": false
//     },
// ]
// server.get("/", (req, res)=>{
// // res.send("Hello Africa");
// // to return as a json file
// res.json({message: "Hello Nigeria"});
// });
// // server.get("/info", (req, res)=>{
// // // res.send("Hello Africa");
// // // to return as a json file on a different path
// // res.json(studentInfo);
// // });

// server.get("/info", (req, res)=>{
// // res.send("Hello Africa");
// // to return as a json file on a different path and also giving it a tag number with a message
// res.status(200).json({
//     message: "Successful",
//     studentInfo,
// });
// });

// server.listen(port,()=> console.log(`Server running on port ${port}`))