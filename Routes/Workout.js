const express = require('express')
const { createworkout,
    getworkout,
    particularworkout,
    deleteworkout,
    updateworkout } = require('../Controllers/WorkoutController')


    const requireauth=require('../Middlewares/RequireAuth')
const router = express.Router()


// require auth for workout routes as middleware
router.use(requireauth)

// Get all workouts
router.get('/', getworkout)

// Get a single workout
router.get("/:id", particularworkout)

// Post a new Workout by referencing it
router.post('/', createworkout)

// Delete a workout
router.delete('/:id', deleteworkout)

// update a workout
router.patch('/:id', updateworkout)

module.exports = router