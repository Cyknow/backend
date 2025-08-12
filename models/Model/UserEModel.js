// This Entire Input fild explaines our data structure and how we want to structure our data
const mongoose = require ("mongoose");
const bcrypt = require ("bcryptjs")
const UserESchema = mongoose.Schema(
    {
        ///projectTitle is an example of a data field
        ///and you can add other data fields
        
        firstName:{
            type: String,
            require: true,
        },

        lastName:{
            type: String,
            require: true,
        },

        email:{
            type: String,
            require: true,
            unique:true,
        },

        password:{
            type: String,
            require: true,
            unique:true,
            minilenght: 5,
            maxlenght: 15,
        },

    },

    {
        timestamps: true,
    },
);


UserESchema.pre("save", async function (next) {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(this.password, salt);
    this.password = hashedPassword;
    next();
  } catch (error) {
    next(error);
  }
});
module.exports = mongoose.model("UserE", UserESchema);