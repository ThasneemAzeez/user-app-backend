const mongoose=require("mongoose")
const scheema = mongoose.Schema(
    {
        "name":{type:String,required:true},
        "dob":{type:String,required:true},
        "bloodgroup":{ type: String, required: true },
        "mobileno":{ type: String, required: true },
        "address":{ type: String, required: true },
        "pincode":{ type: String, required: true },
        "district":{ type: String, required: true },
        "place":{ type: String, required: true },
        "emailid":{ type: String, required: true },
        "username":{ type: String, required: true },
        "password":{ type: String, required: true }
    }
)
let usermodel = mongoose.model("users",scheema);
module.exports={usermodel}