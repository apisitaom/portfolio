const router = require('express').Router();
const login = require('../services/login');

router.get('/', (req, res) => {res.json({ info : `login route`})});

router.post('/login', login.login);

module.exports = router;