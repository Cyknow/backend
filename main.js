const express = require ("express");
const dotenv = require("dotenv").config();
const taskRoutes =require("./routs/Task");
const UserRoutes = require("./routs/UserRout")
const connectDB = require ("./config/db");
const colors = require("colors");
const bodyParser = require('body-parser');
const cors = require('cors');
// const taskRoutes =require("./routs/Users")

const app = express();

connectDB();
const PORT = process.env.PORT;
app.use(bodyParser.json());
app.use(cors());
app.use("/Task", taskRoutes);
// server.use("/Users", taskRoutes)
app.use("/api/User", UserRoutes);
app.listen(PORT,()=> console.log(`Server running on port ${PORT}`.blue));
















// res.send("Buhari Is Dead")
// server.get("/find", (req, res)=>{
//         const people = [
//             {
//                 "id": 1,
//                 "firstName": "Chris",
//                 "lastName":"Henry",
//                 isAdmin:false,
//             },
//             {
//                 "id": 2,
//                 "firstName": "Emeka",
//                 "lastName":"John",
//                 isAdmin:true,
//             },
//             {
//                 "id": 3,
//                 "firstName": "Jay",
//                 "lastName":"Sun",
//                 isAdmin:false,
//             },
//         ]
// res.status(200).json({message:"Successful", people});
//     });

