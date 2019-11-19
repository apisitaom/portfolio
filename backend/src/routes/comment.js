const router = require('express').Router();
const comment = require('../services/comment'); 

router.get('/', (req, res) => {res.json({info : `comment route`})});
router.get('/lists', comment.lists);

router.post('/add', comment.add);

module.exports = router;