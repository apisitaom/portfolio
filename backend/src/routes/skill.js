const router = require('express').Router();
const skill = require('../services/skill');

router.get('/', (req, res) => {res.json({ info : `skill route`})});
router.get('/lists', skill.lists);

router.post('/add', skill.add);
router.post('/edit/:id', skill.edit);

router.delete('/deleted/:id', skill.deleted);

module.exports = router;