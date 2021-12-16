const { Router } = require('express');
const controllers = require('../controllers');

const router = Router();

router.get('/', (req, res) => res.send('Welcome'));

router.post('/character', controllers.createCharacter);
router.get('/character', controllers.getAllCharacter);

module.exports = router;