const UserEModel = require("../Model/UserEModel");
const bcrypt = require("bcryptjs");

const CreateUser = async (req, res)=>{
    const{firstName,lastName,email,password} = req.body;
try {
    const validUser = await UserEModel.findOne({email})
    if (validUser){
        return res.status (512).json({
            message:"user Exist"
        });
    };

    const newUser = new UserEModel({
        firstName,lastName,email,password
    });
    const result = await newUser.save()    
    res.json({
        _id:result._id,
        firstName:result.firstName,
        lastName:result.lastName,
        email:result.email,
        password:result.password,
    });
} catch (error) {
    console.log(error);
    res.status(404).json({message:"Connection Error"})
}
};

const Login =async(req, res)=>{
    const {email,password}=req.body
    try {
        const User =await UserEModel.findOne({email})
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
        email:User.email,
        password:User.password,
    });

    } catch (error) {
        res.status(555).json({
            message:"server error"
        })
    }
};



const UpdateUser = async (req, res) => {
  const { firstName, lastName, email, password, } = req.body;
  const { id } = req.params;

  try {
    /// TO CHECK IF USER EXIST IN OUR DB UNDER USER COLLECTION
    const update = await UserEModel.findById(id);
    if (!update) {
      return res.status(404).json({
        message: "User not found",
      });
    } else {
      update.firstName = firstName || update.firstName;
      update.lastName = lastName || update.lastName;
      update.email = email || update.email;
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
    const userDelete = await UserEModel.findByIdAndDelete(id);
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
    const allUser = await UserEModel.find().sort({ createdAt: -1 });
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
    const singleUser = await UserEModel.findById(id);
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

module.exports = {
    CreateUser,
    Login,    
    UpdateUser,
    deleteUser,
    GetallUser,
    GetSingleUser
};