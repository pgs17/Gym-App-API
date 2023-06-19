const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator=require('validator')
const schema = mongoose.Schema

const UserScehma = new schema({
email:{
    type:String,
    required:true,
    unique:true
},
password:{
    type:String,
    required:true
}
})

// static sign up method
UserScehma.statics.signup= async function (email,password)  {
    
     // validation 
     if(!email || !password){
        throw Error('All Fields Must be Filled')
     }
     if(!validator.isEmail(email)){
        throw Error('Not a Valid Email')
     }
     if(!validator.isStrongPassword(password)){
        throw Error('Password Not Strong Enough')
     }

    const existemail= await this.findOne({email})

    if(existemail){
        throw Error('Email Already In Use')
    }
    const salt= await bcrypt.genSalt(10)
    const hash= await bcrypt.hash(password,salt)

    const user= await this.create({email,password:hash})
 
    return user
}

// static login method
UserScehma.statics.login=async function(email,password){
    if(!email || !password){
        throw Error('All Fields Must be Filled')
    }
    const user = await this.findOne({email})

    if(!user){
        throw Error('Incorrect Email && User doesnt exist ')
    }
    const match = await bcrypt.compare(password,user.password)
    if(!match){
        throw Error('Incorrect Password')
    }
    return user
}


module.exports=mongoose.model("User",UserScehma)