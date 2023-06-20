const User=require('../Models/UserSchema')
const jwt=require('jsonwebtoken')


const createtoken=(id)=>{
   return  jwt.sign({_id:id},process.env.SECRET,{expiresIn:'15d'})
}


//login
const loginuser = async(req,res)=>{
     const {email,password} = req.body

     try {
        const user= await User.login(email,password)
         const token =createtoken(user._id)
         res.status(200).json({email,token})
     } catch (error) {
        res.status(400).json({error:error.message})
     }
}


//signup
const signupuser = async(req,res)=>{
      const{email,password}=req.body

     try {
        const user= await User.signup(email,password)

        // token create
        const token = createtoken(user._id)
        res.status(200).json({email,token})
     } catch (error) {
        res.status(400).json({error:error.message})
     }
}

module.exports={
    loginuser,
    signupuser
}