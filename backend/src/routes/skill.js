const router = require('express').Router();

router.get('/', (req, res) => {res.json({ info : `skill route`})});

module.exports = router;