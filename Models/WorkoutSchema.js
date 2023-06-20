const mongoose=require('mongoose')

const schema = mongoose.Schema

const WorkoutSchema=new schema({
  title:{
    type:String,
    required:true
  },
  reps:{
    type:Number,
    required:true
  },
  load:{
    type:Number,
    required:true
  }
},{timestamps:true})

// timestamps will set automatically an created at and updated at setup

module.exports=mongoose.model("Workout",WorkoutSchema)