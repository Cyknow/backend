// here explaines our data structure
const mongoose = require ("mongoose");
const bcrypt = require ("bcryptjs")
const UserSchema = mongoose.Schema(
    {
        ///projectTitle is an example of a data field
        ///and you can add other data fields
        userName:{
            type: String,
            require: true,
            unique:true,
        },
        firstName:{
            type: String,
            require: true,
        },

        lastName:{
            type: String,
            require: true,
        },

        emailAddress:{
            type: String,
            require: true,
            unique:true,
        },

        phoneNumber:{
            type: Number,
            require: true,
            unique: true,
        },

        password:{
            type: String,
            require: true,
            unique:true,
            minilenght: 8,
            maxlenght: 15,
        },

    },

    {
        timestamps: true,
    },
);


UserSchema.pre("save", async function (next) {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(this.password, salt);
    this.password = hashedPassword;
    next();
  } catch (error) {
    next(error);
  }
});
module.exports = mongoose.model("User", UserSchema);