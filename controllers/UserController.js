const UserModel = require("../models/UserModel");
const bcrypt = require("bcryptjs");

const CreateUser = async (req, res)=>{
    const{userName,firstName,lastName,emailAddress,password} = req.body;
try {
    const UserExist = await UserModel.findOne({userName})
    if (UserExist){
        return res.status (512).json({
            message:"user Exist"
        });
    };

    const emailExist = await UserModel.findOne({emailAddress})
    if(emailExist){
        return res.status (511).json({
            message:"user Exist"
        });
    };
    const newUser = new UserModel({
        userName,firstName,lastName,emailAddress,password
    });
    const result = await newUser.save()
    // const adminToSendDate = await UserModel.findById(id)
    // if (adminToSendDate){
    //     return res.status (511).json({
    //         message:"Only admin are permited"
    //     })
    // }
    res.json({
        _id:result._id,
        userName:result.userName,
        firstName:result.firstName,
        lastName:result.lastName,
        emailAddress:result.emailAddress,
        password:result.password,
    });
} catch (error) {
    console.log(error);
    res.status(404).json({message:"Connection Error"})
}
};

const Login =async(req, res)=>{
    const {emailAddress,password}=req.body
    try {
        const User =await UserModel.findOne({emailAddress})
        if(!User){
            return res.status(777).json({
                message:"Invalid Email address"
            })
        }
        const validPassword = await bcrypt.compare(password, User.password)
        if(!validPassword){
            return res.status(665).json({
                message:"Invalid password"
            })
        }
        res.status(200).json({
         _id:User._id,
        emailAddress:User.emailAddress,
        password:User.password,
    });

    } catch (error) {
        res.status(555).json({
            message:"server error"
        })
    }
};



const UpdateUser = async (req, res) => {
  const { firstName, lastName, emailAddress, phoneNumber, password, } = req.body;
  const { id } = req.params;

  try {
    /// TO CHECK IF USER EXIST IN OUR DB UNDER USER COLLECTION
    const update = await UserModel.findById(id);
    if (!update) {
      return res.status(404).json({
        message: "User not found",
      });
    } else {
      update.firstName = firstName || update.firstName;
      update.lastName = lastName || update.lastName;
      update.emailAddress = emailAddress || update.emailAddress;
      update.phoneNumber = phoneNumber || update.phoneNumber;
      update.password = password || update.password;
    }

    /// SAVING THE UPDATED USER DETAILS
    await update.save();

    /// RETURNING THE UPDATED USER DETAILS
    res.status(200).json(update);
  } catch (error) {
    // where im handling my server error message
    res.status(500).json({
      message: "Failed to update user",
    });
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    /// TO CHECK IF USER EXIST IN OUR DB UNDER USER COLLECTION
    const userDelete = await UserModel.findByIdAndDelete(id);
    if (!userDelete) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    /// RETURNING A SUCCESS MESSAGE
    res.status(200).json({
      message: "User deleted successfully",
    });
  } catch (error) {
    // where i'm handling my server error message
    res.status(500).json({
      message: "Failed to delete user",
    });
  }
};



const GetallUser = async (req, res) => {
  try {
    /// TO CHECK IF USER EXIST IN OUR DB UNDER USER COLLECTION
    const allUser = await UserModel.find().sort({ createdAt: -1 });
    /// RETURNING THE USER DETAILS
    if (!allUser) {
      return res.status(404).json({
        message: "No users found",
      });
    } else {
      res.status(200).json(allUser);
    }
  } catch (error) {
    // where im handling my server error message
    res.status(500).json({
      message: "Failed to retrieve users",
    });
  }
};


const GetSingleUser = async (req, res) => {
  const { id } = req.params;
  try {
    /// TO CHECK IF USER EXIST IN OUR DB UNDER USER COLLECTION
    const singleUser = await UserModel.findById(id);
    if (!singleUser) {
      return res.status(404).json({
        message: "User not found",
      });
    } else {
      res.status(200).json(singleUser);
    }
    /// RETURNING THE USER DETAILS
  } catch (error) {
    // where im handling my server error message
    res.status(500).json({
      message: "Failed to retrieve user",
    });
  }
};


// const GetallUser = async (req, res) => {
// try {
//     const UserGet = await UserModel.find().sort({createdAt:-1});
//     res.json(UserGet);
// } catch (error) {
//     console.log(error);
// }
// };

module.exports = {
    CreateUser,
    Login,    
    UpdateUser,
    deleteUser,
    GetallUser,
    GetSingleUser
};

// const LoginUser = async (req, res) => {
//   const { emailAddress, passowrd } = req.body;
//   try {
//     //// to check if task exist in our db (UserModel) under task collection

//     const User = await UserModel.findOne({
//       emailAddress,
//     });
//     if (!User) {
//       return res.status(404).json({
//         message: "Invalid User",
//       });
//     }
//     const validPassword = await bcrypt.compare(passowrd, User.passowrd);
//     if (!validPassword) {
//       return res.status(402).json({
//         message: "Invalid password",
//       });
//     }

//     /// we are saving the everything thing is the req.body to the db
//     // const result = User;

//     /////where am returning the data if successful
//     // res.status(200).json(taskResult);
//     //  or this
//     //where am returning the data if successful
//     res.status(200).json({
//         message: "login successful",
//        User
//     });
//   } catch (error) {
//     ///where am hangling my server error message
//     res.status(404).json({
//       message: "Login Failed",
//     });
//   }
// };