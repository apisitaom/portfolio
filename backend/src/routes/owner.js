const router = require('express').Router();
const owner = require('../services/owner');
const img = require('../libs/imageupload');

router.get('/', (req, res) => {res.json({ info : `owner route`})});

router.post('/add',img.upload, owner.add);
router.post('/edit', owner.edit);

module.exports = router;