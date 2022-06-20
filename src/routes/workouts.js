const express = require('express');
const router = express.Router();
const Workout = require('../models/Workout');

// GET all workouts
router.get('/', (req, res) => { 
  res.json({msg: 'GET all workouts'});
});

// GET a single workout
router.get('/:id', (req, res) => {
  res.json({msg: 'GET a single workout'});
});

// POST a new workout
router.post('/', async (req, res) => {
  const { title, load, reps } = req.body;

  try {
    const workout = await Workout.create({ title, load, reps });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Update a new workout
router.patch('/:id', (req, res) => {
  res.json({msg: 'Update a workout'});
});

// Delete a new workout
router.delete('/:id', (req, res) => {
  res.json({msg: 'Delete a workout'});
});


module.exports = router;