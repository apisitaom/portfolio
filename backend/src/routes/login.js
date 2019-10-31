const router = require('express').Router();

router.get('/', (req, res) => {
    res.json({ info : `login route`});
});

module.exports = router;