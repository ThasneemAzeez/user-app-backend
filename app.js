const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const { usermodel } = require("./models/user")

const app =express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://thasneemazeez:thasneem38@cluster0.uk9okno.mongodb.net/userdb?retryWrites=true&w=majority&appName=Cluster0")
app.get("/",(req,res)=>{
    res.send("hello")
})


app.post("/add",(req,res)=>{
    let input=req.body
    let user = new usermodel(input)
    user.save()
    res.json({"status":"success"})
})

app.get("/view",(req,res)=>{
    usermodel.find().then(
        (data)=>{
            res.json(data)
        }
    ).catch((error)=>{
        res.json(error)

    })
})

app.listen(8080,()=>{
    console.log("server started")
})
