// here explaines our data structure
const mongoose = require ("mongoose");
const SampleSchema = mongoose.Schema(
    {
        ///projectTitle is an example of a data field
        ///and you can add other data fields
        projectTitle:{
            type: String,
            require: true,
        },



















        // description:{
        //     type:String,
        //     required:false,
        //     minilenght: 5,
        //     maxlenght: 1000,
        // },
        
        // assignedTo:{
        //     type:String,
        //     required:[true, "This Input Field is Required"],
        //     unique:true,
        // },
        // projectLink:{
        //     type:String,
        //     required:false,
        // },
        // startDate:{
        //     type:String,
        //     required:true
        // },
        // endDate:{
        //     type: Date,
        //     required:true
        // },
        // isCompleted:{
        //     type:Boolean,
        //     default:false,
        // },
        // status:{
        //     type:String,
        //     enum:["Pending", "Ready To Test", "Ongoing", "Completed","Paid", "Not Paid"],
        //     default:"Pending"
        // },


        // orders:{
        //     type[
        //         {
        //             productId:{
        //                 type:String
        //             }
        //         }
        //     ]
        // },

        // profilePix:{
        //     type:String,
        //     required:false,
        //     default:"https//avatar/img/ddjd"
        // },
        // password:{
        //     type:String,
        //     required:true,
        //     default:"bbbb"
        // },


    },

    {
        timestamps: true,
    },
);
module.exports = mongoose.model("Sample", SampleSchema);