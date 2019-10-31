const router = require('express').Router();

router.get('/', (req, res) => {res.json({ info : `owner route`})});

module.exports = router;