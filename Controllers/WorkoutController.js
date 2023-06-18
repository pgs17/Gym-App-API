const Workout=require('../Models/WorkoutSchema')
const mongoose=require('mongoose')

// get all workout
const getworkout = async(req,res)=>{
        const workout= await Workout.find({}).sort({createdAt:-1}) // sort in descending order 
        res.status(200).json(workout)
    
}

// get a single workout
const particularworkout= async(req,res)=>{
    const{id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({message:"No such Workout and Invalid ID"})
    }
    const workout=await Workout.findById(id)
   if(!workout){
    return res.status(404).json({error:"There is no such Workout"})
   }
   res.status(200).json(workout)
 
}


// create a workout
const createworkout = async(req,res) => {
  const{title,reps,load}=req.body 
  try {
    const workout= await Workout.create({title,reps,load})
    res.status(200).json(workout)
  } catch (error) {
    res.status(400).json({error:error.message})
  }
}

// delete a workout
const deleteworkout = async(req,res)=>{
    const {id}=req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"No such Workout and Invalid ID"})
    }
    const workout= await Workout.findOneAndDelete({_id:id})
    if(!workout){
        return res.status(404).json({error:"There is no such Workout"})
       }
       res.status(200).json(workout)
}

// update a single workout

const updateworkout=async(req,res)=>{
    const{id}=req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"No such Workout And Invalid ID"})
    }

    const workout=await Workout.findOneAndUpdate({_id:id},{...req.body})
    if(!workout){
        return res.status(404).json({message:'No such Workout'})
    }
    res.status(200).json(workout)

}





module.exports={
    createworkout,
    getworkout,
    particularworkout,
    deleteworkout,
    updateworkout
}