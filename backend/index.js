import express from "express"
import cors from "cors"
import { config } from "dotenv"
import { sendMail } from "./utils/sendMail.js"
const router =express.Router()
const app =express()
config({path:"./config.env"})
app.use(cors(
    {
        origin:[process.env.FRONTEND_URL],
    methods:["POST"],
    credentials:true
    
    }))

    app.use(express.json())
    app.use(express.urlencoded({extended:true}))

    router.post("/send/mail",async(req,res,next)=>{
        const {name,email,message}=req.body
        if(!name||!email||!message){
            return res.status(400).json({
                success:false,
                message:"Please fill all the fields",
            })
        }
     try{
        await sendMail({
            email:email,
            subject:"GYM WEBSITE",
            message,
            userEmail:email
            })
            res.status(200).json({
                success:true,
                message:"Mail sent successfully",
                
        })
                                }catch(err){
                                    console.log(err)
                                    res.status(500).json({
                                        success:false,
                                        message:"Internal server error"})
                                    }

    })
    app.use("/",router)

    

app.get('/',()=>{
    console.log("hello world")

})
app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`)
})