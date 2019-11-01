const router = require('express').Router();
const language = require('../services/language');

router.get('/', (req, res) => {res.json({ info : `language route`})});
router.get('/lists', language.lists);

router.post('/add', language.add);
router.post('/edit/:id', language.edit);

router.delete('/deleted/:id', language.deleted);

module.exports = router;