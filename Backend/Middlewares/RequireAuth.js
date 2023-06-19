// Verify Authentication of User and give access to the workouts
const User=require('../Models/UserSchema')
const jwt= require('jsonwebtoken')

const requireauth= async (req,res,next) =>{
         // verify
    const {authorization}=req.headers

    if(!authorization){
         return res.status(401).json({message:"Authorization token required"})
    }
        const token = authorization.split(' ')[1] 
        try{
   const {_id}= jwt.verify(token,process.env.SECRET)
// find user based on id and get a speific document using select
     req.user= await User.findOne({_id}).select('_id')
     next()
        }
        catch (error){
            res.status(404).json({error:"Unauthorized Access"})
        }
}

module.exports=requireauth