const express = require('express');
const router = express.Router();

// GET all matches
router.get('/', (req, res) => { 
  res.json({msg: 'GET all matches'});
});

// GET a single match
router.get('/:id', (req, res) => {
  res.json({msg: 'GET a single match'});
});

// POST a new match
router.post('/', (req, res) => {
  res.json({msg: 'Post a new match'});
});

// Update a new match
router.patch('/:id', (req, res) => {
  res.json({msg: 'Update a match'});
});

// Delete a new match
router.delete('/:id', (req, res) => {
  res.json({msg: 'Delete a match'});
});

module.exports = router;