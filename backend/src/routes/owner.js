const router = require('express').Router();
const owner = require('../services/owner');

router.get('/', (req, res) => {res.json({ info : `owner route`})});

router.post('/add', owner.add);
router.post('/edit', owner.edit);

module.exports = router;