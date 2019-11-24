const router = require('express').Router();
const owner = require('../services/owner');
const img = require('../libs/imageupload');

router.get('/', (req, res) => {res.json({ info : `owner route`})});
router.get('/lists', owner.lists);

router.post('/add',img.upload, owner.add);
router.post('/edit/:id',img.upload, owner.edit);
router.post('/picture/:id', img.upload, owner.picture);

module.exports = router;