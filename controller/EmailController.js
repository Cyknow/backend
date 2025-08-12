// const EmailModel = require("../Model/EmailModel");
// const bcrypt = require("bcryptjs");

// const CreateEmail = async (req, res)=>{
//     const{reciever,sender,subject,msgContent} = req.body;
// try {
//     const newUser = new EmailModel({
//         reciever,sender,subject,msgContent
//     });
//     const result = await newUser.save()
    
//     res.json({
//         _id:result._id,
//         reciever:result.reciever,
//         sender:result.sender,
//         subject:result.subject,
//         msgContent:result.msgContent,
//     });
// } catch (error) {
//     console.log(error);
//     res.status(404).json({message:"Connection Error"})
// }
// };

// const EmailUpdate = async (req, res) => {
//   const { reciever,sender,subject,msgContent } = req.body;
//   const { id } = req.params;

//   try {
//     /// TO CHECK IF USER EXIST IN OUR DB UNDER USER COLLECTION
//     const update = await EmailModel.findById(id);
//     if (!update) {
//       return res.status(404).json({
//         message: "Email not found",
//       });
//     } else {
//       update.reciever = reciever || update.reciever;
//       update.sender = sender || update.sender;
//       update.subject = subject || update.subject;
//       update.msgContent = msgContent || update.msgContent;
//     }

//     /// SAVING THE UPDATED USER DETAILS
//     await update.save();

//     /// RETURNING THE UPDATED USER DETAILS
//     res.status(200).json(update);
//   } catch (error) {
//     // where im handling my server error message
//     res.status(500).json({
//       message: "Failed to update user",
//     });
//   }
// };

// const deleteEmail = async (req, res) => {
//   const { id } = req.params;

//   try {
//     /// TO CHECK IF USER EXIST IN OUR DB UNDER USER COLLECTION
//     const EmailDelete = await EmailModel.findByIdAndDelete(id);
//     if (!EmailDelete) {
//       return res.status(404).json({
//         message: "Email not found",
//       });
//     }

//     /// RETURNING A SUCCESS MESSAGE
//     res.status(200).json({
//       message: "Email deleted successfully",
//     });
//   } catch (error) {
//     // where i'm handling my server error message
//     res.status(500).json({
//       message: "Failed to delete Email",
//     });
//   }
// };



// const GetallEmail = async (req, res) => {
//   try {
//     /// TO CHECK IF USER EXIST IN OUR DB UNDER USER COLLECTION
//     const allEmail = await EmailModel.find().sort({ createdAt: -1 });
//     /// RETURNING THE USER DETAILS
//     if (!allEmail) {
//       return res.status(404).json({
//         message: "No Emails found",
//       });
//     } else {
//       res.status(200).json(allEmail);
//     }
//   } catch (error) {
//     // where im handling my server error message
//     res.status(500).json({
//       message: "Failed to retrieve Emails",
//     });
//   }
// };


// const GetSingleEmail = async (req, res) => {
//   const { id } = req.params;
//   try {
//     /// TO CHECK IF USER EXIST IN OUR DB UNDER USER COLLECTION
//     const singleEmail = await EmailModel.findById(id);
//     if (!singleEmail) {
//       return res.status(404).json({
//         message: "Email not found",
//       });
//     } else {
//       res.status(200).json(singleEmail);
//     }
//     /// RETURNING THE USER DETAILS
//   } catch (error) {
//     // where im handling my server error message
//     res.status(500).json({
//       message: "Failed to retrieve Email",
//     });
//   }
// };

// module.exports = {
//     CreateEmail,
//     EmailUpdate,
//     deleteEmail,
//     GetallEmail,
//     GetSingleEmail
// };