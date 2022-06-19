const Player = require('../models/Player');

const addNewPlayer = async (req, res) => {
  console.log('looks like we made it');
  const { firstName, lastName, skillRank } = req.body;

  if (!firstName || !lastName || !skillRank) {
    return res.status(400).json({ message: 'First name, last name and skill rank are all required'});
  };

  const duplicate = await Player.findOne({ firstName: firstName, lastName: lastName });
  if (duplicate) return res.sendStatus(409);

  try{
    await Player.create({
      firstName: firstName,
      lastName: lastName,
      skillRank: skillRank
    });
  } catch (error) {
    return res.sendStatus(502);
  }
};

module.exports = { addNewPlayer };