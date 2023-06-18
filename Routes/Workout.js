const express = require('express')
const { createworkout,
    getworkout,
    particularworkout,
    deleteworkout,
    updateworkout } = require('../Controllers/WorkoutController')

const router = express.Router()

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