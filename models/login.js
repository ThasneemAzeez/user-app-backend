const mongoose=require("mongoose")
const scheema = mongoose.Schema(
    {
        "username":{type:String,required:true},
        "password":{type:String,required:true}
    }
)
let loginmodel = mongoose.model("logins",scheema);
module.exports={loginmodel}