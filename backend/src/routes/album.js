const router = require('express').Router();
const album = require('../services/album');
const img = require('../libs/imageupload');

router.get('/', (req, res) => {res.json({ info : `album route`})});
router.get('/lists', album.lists);

router.post('/add',img.upload, album.add);
router.post('/edit/:id',img.upload, album.edit);

module.exports = router;