const router = require('express').Router();
const result = require('../services/result');

router.get('/', (req, res) => {res.json({ info : `result route`})});
router.get('/lists', result.lists);

router.post('/add', result.add);
router.post('/edit/:id', result.edit);

router.delete('/deleted/:id', result.deleted);

module.exports = router;