const router = require('express').Router();
const resume = require('../services/resume'); 

router.get('/', (req, res) => {res.json({info : `resume route`})});
router.get('/lists', resume.lists);

router.post('/add', resume.add);
router.post('/edit/:id', resume.edit);

module.exports = router;