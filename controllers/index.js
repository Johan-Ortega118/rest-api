const models = require('../database/models');

// post
const createCharacter = async (req, res) => {
  try {
    const character = await models.Character.create(req.body);
    return res.status(201).json({character});

  } catch(error) {
    return res.status(500).json({ error: error.message }); 
  }
};

//get
const getAllCharacter = async (req, res) => {
  console.log('getting character');
  try {
    const character = await models.Character.findAll ({
      include: []
    });
    return res.status(200).json({character});

  } catch (error) {
    return res.status(500).send(error.message);
  }
}; 

module.exports = {
  createCharacter,
  getAllCharacter
}