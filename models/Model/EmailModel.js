// This Entire Input fild explaines our data structure and how we want to structure our data
const mongoose = require ("mongoose");
// const bcrypt = require ("bcryptjs")
const EmailSchema = mongoose.Schema(
    {
        ///projectTitle is an example of a data field
        ///and you can add other data fields
        
        reciever:{
            type: String,
            require: true,
        },

        sender:{
            type: String,
            require: true,
        },

        subject:{
            type: String,
            require: true,
            unique:true,
            minilenght: 8,
            maxlenght: 50,
        },

        msgContent:{
            type: String,
            require: true,
            unique:true,
            minilenght: 20,
            maxlenght: 1000,
        },

    },

    {
        timestamps: true,
    },
);

// EmailSchema.pre("save", async function (next) {
//   try {
//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(this.password, salt);
//     this.password = hashedPassword;
//     next();
//   } catch (error) {
//     next(error);
//   }});
module.exports = mongoose.model("Email", EmailSchema);