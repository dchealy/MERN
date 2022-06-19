const express = require('express');
const router = express.Router();
const createPlayer = require('../controllers/player/addNewPlayer')

// GET a single player
router.get('/players/:id', (req, res) => {
  res.json({msg: 'GET a single player'});
});

// POST a new player
router.post('/players/', async (req, res) => {
  await createPlayer(req,res);
  res.json({msg: 'Post a new player'});
});


module.exports = router;