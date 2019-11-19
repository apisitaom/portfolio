const router = require('express').Router();
const aboutme = require('../services/aboutme'); 

router.get('/', (req, res) => {res.json({info : `aboutme route`})});
router.get('/lists', aboutme.lists);

router.post('/add', aboutme.add);
router.post('/edit/:id', aboutme.edit);

module.exports = router;