const router = require('express').Router();

router.get('/', (req, res) => {res.json({ info : `album route`})});

module.exports = router;