const router = require('express').Router();

router.get('/', (req, res) => {res.json({ info : `language route`})});

module.exports = router;